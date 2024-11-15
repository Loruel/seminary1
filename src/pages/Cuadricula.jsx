import React, { useState } from "react";

const Grid = () => {
    // Valores correctos para las casillas blancas
    const correctValues = Array(221).fill(""); // Aquí deberías reemplazar con los valores correctos para cada casilla blanca
    /* correctValues[39] = "T"; */
    correctValues[40] = "E";
    correctValues[41] = "N";
    correctValues[42] = "T";
    /* correctValues[43] = "A"; */
    correctValues[44] = "C";
    correctValues[45] = "I";
    correctValues[46] = "O";
    correctValues[47] = "N";
    /* correctValues[48] = "E"; */
    correctValues[49] = "S";

    correctValues[121] = "F";
    /* correctValues[122] = "E"; */
    correctValues[123] = "L";
    /*  correctValues[124] = "I"; */
    correctValues[125] = "C";
    /* correctValues[126] = "I"; */
    correctValues[127] = "D";
    correctValues[128] = "A";
    /* correctValues[129] = "D"; */




    correctValues[0] = "S";
    correctValues[13] = "A";
    correctValues[26] = "N";
    correctValues[39] = "T";
    correctValues[52] = "I";
    correctValues[65] = "F";
    correctValues[78] = "I";
    correctValues[91] = "C";
    correctValues[104] = "A";
    correctValues[117] = "C";
    correctValues[130] = "I";
    correctValues[143] = "O";
    correctValues[156] = "N";

    correctValues[4] = "A";
    correctValues[17] = "L";
    correctValues[30] = "M";
    correctValues[43] = "A";
    correctValues[56] = "3";
    correctValues[69] = "9";
    correctValues[82] = "9";

    correctValues[48] = "E";
    correctValues[61] = "X";
    correctValues[74] = "P";
    correctValues[87] = "I";
    correctValues[100] = "A";
    correctValues[113] = "C";
    correctValues[126] = "I";
    correctValues[139] = "O";
    correctValues[152] = "N";

    correctValues[109] = "P";
    correctValues[122] = "E";
    correctValues[135] = "R";
    correctValues[148] = "F";
    correctValues[161] = "E";
    correctValues[174] = "C";
    correctValues[187] = "T";
    correctValues[200] = "O";
    correctValues[213] = "S";

    correctValues[98] = "C";
    correctValues[111] = "R";
    correctValues[124] = "I";
    correctValues[137] = "S";
    correctValues[150] = "T";
    correctValues[163] = "O";

    correctValues[77] = "P";
    correctValues[90] = "E";
    correctValues[103] = "C";
    correctValues[116] = "A";
    correctValues[129] = "D";
    correctValues[142] = "O";
    correctValues[155] = "S";


    const placeholders = Array(221).fill("");
    placeholders[0] = "1";
    placeholders[4] = "2";
    placeholders[109] = "3";
    placeholders[98] = "4";
    placeholders[48] = "5";
    placeholders[77] = "6";

    placeholders[39] = "1";
    placeholders[121] = "2";
    // ... Puedes añadir los valores correctos para otras casillas blancas aquí

    const [values, setValues] = useState(Array(221).fill("")); // 15x15 = 221 casillas
    const [message, setMessage] = useState(""); // Mensaje de felicitación
    const blueIndices = [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 50, 51, 53, 54, 55, 57, 58, 59, 60, 62, 63, 64, 66, 67, 68, 70, 71, 72, 73, 75, 76, 79, 80, 81, 83, 84, 85, 86, 88, 89, 92, 93, 94, 95, 96, 97, 99, 101, 102, 105, 106, 107, 108, 110, 112, 114, 115, 118, 119, 120, 131, 132, 133, 134, 136, 138, 140, 141, 144, 145, 146, 147, 149, 151, 153, 154, 157, 158, 159, 160, 162, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 214, 215, 216, 217, 218, 219, 220
    ]; // Índices de las casillas azules

    // Función para manejar el cambio de valor en las casillas
    const handleInputChange = (index, value) => {
        if (value.length <= 1) {
            const updatedValues = [...values];
            updatedValues[index] = value.toUpperCase();
            setValues(updatedValues);
        }
    };

    // Función para verificar si todos los valores son correctos
    const checkValues = () => {
        const isCorrect = values.every((value, index) => {
            return blueIndices.includes(index) || value === correctValues[index];
        });

        if (isCorrect) {
            setMessage("¡Felicidades! Todos los valores son correctos.");
        } else {
            setMessage("Algunos valores son incorrectos. Intenta nuevamente.");
        }
    };

    return (
        <>
            <div className="grid grid-cols-[repeat(13,minmax(0,1fr))]">
                {Array.from({ length: 221 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-7 h-7 flex items-center justify-center border border-gray-500 text-sm font-bold text-black ${blueIndices.includes(index)
                            ? "bg-customBlue text-white border-none"
                            : "bg-white"
                            }`}
                    >
                        {blueIndices.includes(index) ? (
                            ""
                        ) : (
                            <input
                                type="text"
                                value={values[index]}
                                placeholder={placeholders[index]}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                className="w-full h-full text-center bg-transparent outline-none"
                            />
                        )}
                    </div>
                ))}



            </div>
            <div className="w-full">
                {message && (
                    <div className="w-full text-center mt-10 text-lg font-semibold text-white">
                        {message}
                    </div>
                )}
                <div className="justify-center w-full text-center mt-6">
                    <button
                        onClick={checkValues}
                        className="bg-orange-400 text-black text-lg px-4 py-2 rounded font-semibold"
                    >
                        Verificar
                    </button>
                </div>

            </div>
        </>

    );
};

export default Grid;
