import print3x1 from './print3x1.js';

export default function subtract3x1From3x1(
  /** @type {[Number, Number, Number]} */ matrix,
  /** @type {[Number, Number, Number]} */ otherMatrix
) {
  return [
    matrix[0] - otherMatrix[0],
    matrix[1] - otherMatrix[1],
    matrix[2] - otherMatrix[2],
  ];
}

void function test() {
  const matrix = [1, 2, 3];
  const otherMatrix = [6, 5, 4];
  const resultMatrix = subtract3x1From3x1(matrix, otherMatrix);
  const checkMatrix = [-5, -3, -1];

  if (JSON.stringify(resultMatrix) !== JSON.stringify(checkMatrix)) {
    print3x1('matrix', matrix);
    print3x1('other matrix', otherMatrix);
    print3x1('result matrix', resultMatrix);
    print3x1('check matrix', checkMatrix);
  }
}()
