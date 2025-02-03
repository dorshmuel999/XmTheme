import {z} from 'zod';
import {customThemeSchemaDto} from "./createCustomThemeDto";

export const updateCustomThemeDtoSchema = customThemeSchemaDto.strict().partial();
export type UpdateCustomThemeDto = z.infer<typeof updateCustomThemeDtoSchema>;