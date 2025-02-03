import {z} from 'zod';
import {customThemeSchemaDto} from "./createCustomThemeDto";

export const updateCustomThemeDtoSchema = customThemeSchemaDto.partial().strict();
export type UpdateCustomThemeDto = z.infer<typeof updateCustomThemeDtoSchema>;