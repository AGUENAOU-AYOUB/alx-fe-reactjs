import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    return set({ recipes: updatedRecipes });
  },

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
      recommendations: state.recommendations.filter((r) => r.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const filtered = get().recipes.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  filteredRecipes: [],

  // 🔥 FAVORITES
  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? {}
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // 🎯 RECOMMENDATIONS
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.4 // simple logic
    );
    set({ recommendations: recommended });
  },
}));
