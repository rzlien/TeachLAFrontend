export const GET_PROGRAM = "GET_PROGRAM";
export function getProgram(sketchid) {
    return { type: GET_PROGRAM, sketchid: sketchid }
}