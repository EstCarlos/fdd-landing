import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}