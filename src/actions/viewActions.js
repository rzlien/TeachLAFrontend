export const LOAD_PROGRAM = "LOAD_PROGRAM";
export function loadProgram(data) {
    return { type: LOAD_PROGRAM, data: data }
}