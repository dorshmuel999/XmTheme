import {z} from 'zod';
import {customThemeSchemaDto} from "./createCustomThemeDto";

export const updateCustomThemeDtoSchema = customThemeSchemaDto.partial();
export type UpdateCustomThemeDto = z.infer<typeof updateCustomThemeDtoSchema>;