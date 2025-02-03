import {z} from 'zod';

export const customThemeSchemaDto = z.object({
    "--a_commonPrimary": z.string(),
    "--a_commonSecondary": z.string(),
    "--a_commonSelection": z.string(),
    "--a_commonFocus": z.string(),
    "--a_globalBackground": z.string(),
    "--a_globalBody": z.string(),
    "--a_buttonPrimary": z.string(),
    "--a_buttonPrimaryHover": z.string(),
    "--a_buttonOnSecondaryActive": z.string(),
    "--a_buttonSecondary": z.string(),
    "--a_buttonSecondaryHover": z.string(),
    "--a_buttonOnPrimary": z.string(),
    "--a_buttonOnPrimaryActive": z.string(),
    "--a_inputPrimary": z.string(),
    "--a_inputPrimaryActive": z.string(),
    "--a_inputSecondary": z.string(),
    "--a_inputSecondarySelected": z.string(),
    "--a_inputSurface": z.string(),
    "--a_inputSurfaceActive": z.string(),
    "--a_selectionPrimary": z.string(),
    "--a_selectionSecondary": z.string(),
    "--a_selectionSecondaryActive": z.string(),
    "--a_selectionOnPrimary": z.string(),
});
export type CustomThemeDto = z.infer<typeof customThemeSchemaDto>;
