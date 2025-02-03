export interface Theme {
    id: number;
    name: string;
    description: string;
  }
  
  const themes: Theme[] = [
    { id: 1, name: "Dark Mode", description: "A dark theme for night owls." },
    { id: 2, name: "Light Mode", description: "A bright theme for sun lovers." },
  ];
  
  export const getThemes = (): Theme[] => {
    return themes;
  };
  
  export const getThemeById = (id: number): Theme | undefined => {
    return themes.find(theme => theme.id === id);
  };