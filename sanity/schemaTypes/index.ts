import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import { productSchema5 } from "./products5";
import { productSchema4 } from "./products4";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema,productSchema5,productSchema4],
};
