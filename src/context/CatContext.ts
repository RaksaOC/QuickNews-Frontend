// import { createContext, useContext, useState, PropsWithChildren } from "react";

// export const CategoryContext = createContext<{
//   category: string;
//   setCategory: (category: string) => void;
// } | undefined>(undefined);

// export function CategoryProvider({ children }: PropsWithChildren<{}>) {
//   const [category, setCategory] = useState('foryou');
//   return (
//     <CategoryContext.Provider value={{ category, setCategory }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// }

// export function useCategory() {
//   const ctx = useContext(CategoryContext);
//   if (!ctx) throw new Error("useCategory must be used within a CategoryProvider");
//   return ctx;
// }