import React, { useState, useEffect } from 'react';

const generarSopa = (palabras, tamaño) => {
    const sopa = Array(tamaño).fill(null).map(() => Array(tamaño).fill(''));
    const posicionesCorrectas = [];

    const colocarPalabra = (palabra) => {
        const direccion = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        let fila, col;

        for (let i = 0; i < 100; i++) {
            fila = Math.floor(Math.random() * tamaño);
            col = Math.floor(Math.random() * tamaño);

            if (direccion === 'horizontal' && col + palabra.length <= tamaño) {
                if (palabra.split('').every((letra, idx) => sopa[fila][col + idx] === '' || sopa[fila][col + idx] === letra)) {
                    palabra.split('').forEach((letra, idx) => {
                        sopa[fila][col + idx] = letra;
                        posicionesCorrectas.push(`${fila}-${col + idx}`);
                    });
                    return true;
                }
            } else if (direccion === 'vertical' && fila + palabra.length <= tamaño) {
                if (palabra.split('').every((letra, idx) => sopa[fila + idx][col] === '' || sopa[fila + idx][col] === letra)) {
                    palabra.split('').forEach((letra, idx) => {
                        sopa[fila + idx][col] = letra;
                        posicionesCorrectas.push(`${fila + idx}-${col}`);
                    });
                    return true;
                }
            }
        }
        return false;
    };

    palabras.forEach((palabra) => colocarPalabra(palabra));

    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            if (sopa[i][j] === '') {
                sopa[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    return { sopa, posicionesCorrectas };
};

const SopaDeLetrasBosques1 = () => {
    const palabras = ['NEFI'];
    const tamaño = 10;

    const [{ sopa, posicionesCorrectas }, setSopaData] = useState({ sopa: [], posicionesCorrectas: [] });
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        setSopaData(generarSopa(palabras, tamaño));
    }, []);

    const handleSelect = (fila, col) => {
        const coordenada = `${fila}-${col}`;
        setSeleccionadas((prevSeleccionadas) =>
            prevSeleccionadas.includes(coordenada)
                ? prevSeleccionadas.filter((coord) => coord !== coordenada)
                : [...prevSeleccionadas, coordenada]
        );
    };

    useEffect(() => {
        const todasCorrectas = posicionesCorrectas.every((coord) => seleccionadas.includes(coord));
        if (todasCorrectas && posicionesCorrectas.length === seleccionadas.length) {
            setMensaje('¡Felicidades! Has encontrado todas las palabras correctamente.');
        } else {
            setMensaje(''); // Limpiar el mensaje si no todas las palabras están seleccionadas
        }
    }, [seleccionadas, posicionesCorrectas]);

    return (
        <div
            className="max-w-lg mx-auto p-4 text-white h-full"
            style={{ backgroundColor: '#022044' }}>
            <h1 className="text-2xl font-semibold text-center mb-2 mt-4">
                Sopa de Letras
            </h1>
            <h2 className='text-center text-3xl font-bold mb-4'>
                BOSQUES 1
            </h2>
            {mensaje && <div className="text-green-500 font-bold mt-4 text-center mb-4">{mensaje}</div>}
            <div>
                <div className='mb-6'>
                    <li>
                        1. Primer libro del Libro de Mormon
                    </li>
                </div>
            </div>
            <div className="grid grid-cols-10 gap-1 mb-6">
                {sopa.map((fila, i) =>
                    fila.map((letra, j) => {
                        const coordenada = `${i}-${j}`;
                        const isSelected = seleccionadas.includes(coordenada);
                        return (
                            <div
                                key={coordenada}
                                onClick={() => handleSelect(i, j)}
                                className={`flex items-center justify-center w-10 h-10 border border-gray-300 text-lg font-semibold cursor-pointer ${isSelected ? 'bg-orange-400 text-white' : 'bg-white text-black'
                                    }`}
                            >
                                {letra}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default SopaDeLetrasBosques1;
