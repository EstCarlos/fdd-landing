import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let previousScrollPos = { x: 0, y: 0 };

export const scrolltoHash = function (element_id: string) {
  // Guardar la posición de scroll actual antes de desplazarse
  previousScrollPos = { x: window.scrollX, y: window.scrollY };

  // Realizar el desplazamiento suave al elemento
  const element = document.getElementById(element_id);
  element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};

// Función para restaurar la posición de scroll
export const restoreScrollPosition = function () {
  window.scrollTo(previousScrollPos.x, previousScrollPos.y);
};