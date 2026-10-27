import type { Limits } from "@demo/api";
export function render(l: Limits) {
  return `${l.maxBytes} bytes, ${l.maxLines} lines`;
}
