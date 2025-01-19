// Import environment variables from .env.local
import "dotenv/config";

// Import the Sanity client to interact with the Sanity backend
import { createClient } from "@sanity/client";

// Load required environment variables
const {
  NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
  NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset (e.g., "production")
  NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Sanity API token
} = process.env;

// Check if the required environment variables are provided
if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
  console.error("Missing required environment variables. Please check your .env.local file.");
  process.exit(1); // Stop execution if variables are missing
}

// Create a Sanity client instance to interact with the target Sanity dataset
const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production", // Default to "production" if not set
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: "2023-01-01", // Sanity API version
  token: NEXT_PUBLIC_SANITY_AUTH_TOKEN, // API token for authentication
});

// Function to delete documents from Sanity by type
async function deleteDocumentsByType(documentType) {
  try {
    console.log(`Fetching documents of type: ${documentType}...`);
    // Fetch all documents of the given type
    const documents = await targetClient.fetch(`*[_type == "${documentType}"]`);

    if (documents.length === 0) {
      console.log(`No documents found for type: ${documentType}`);
      return;
    }

    console.log(`Found ${documents.length} documents. Deleting...`);

    // Delete each document
    for (const doc of documents) {
      await targetClient.delete(doc._id);
      console.log(`Deleted document: ${doc._id} (${doc.title || "No Title"})`);
    }

    console.log(`All documents of type "${documentType}" deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting documents of type "${documentType}":`, error.message);
  }
}

// Main function to clean up categories and products
async function cleanupData() {
  console.log("Starting data cleanup...");

  try {
    // Delete all products
    await deleteDocumentsByType("products");

    // Delete all categories
    await deleteDocumentsByType("categories");

    console.log("Data cleanup completed successfully!");
  } catch (error) {
    console.error("Error during cleanup:", error.message);
    process.exit(1); // Stop execution if an error occurs
  }
}

// Start the cleanup process
cleanupData();
