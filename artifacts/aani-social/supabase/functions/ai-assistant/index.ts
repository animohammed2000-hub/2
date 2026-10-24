import { handleGeminiRequest } from "../_shared/gemini.ts";

// Deprecated route alias; it uses the same authentication and response contract.
Deno.serve((req: Request) => handleGeminiRequest(req));
