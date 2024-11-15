import React, { useState, useEffect } from 'react';

const generarSopa = (palabras, tamaño) => {
    const sopa = Array(tamaño).fill(null).map(() => Array(tamaño).fill(''));
    const posicionesCorrectas = new Set();

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
                        posicionesCorrectas.add(`${fila}-${col + idx}`);
                    });
                    return true;
                }
            } else if (direccion === 'vertical' && fila + palabra.length <= tamaño) {
                if (palabra.split('').every((letra, idx) => sopa[fila + idx][col] === '' || sopa[fila + idx][col] === letra)) {
                    palabra.split('').forEach((letra, idx) => {
                        sopa[fila + idx][col] = letra;
                        posicionesCorrectas.add(`${fila + idx}-${col}`);
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

    return { sopa, posicionesCorrectas: Array.from(posicionesCorrectas) };
};

const SopaDeLetrasBosques1 = () => {
    const palabras = ['ZORAMITAS', 'CAPITAN', 'HELAMAN', 'GADIANTON', 'PAHORAN', 'SANTACENA', 'SAMUEL', 'GENTILES', 'DISCIPULO' , 'CONVENIOS', 'DIVINA'];
    const tamaño = 15;

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
            setMensaje('');
        }
    }, [seleccionadas, posicionesCorrectas]);

    return (
        <div className="max-w-lg mx-auto p-4 text-white h-full" style={{ backgroundColor: '#022044' }}>
            <h1 className="text-2xl font-semibold text-center mb-2 mt-4">Sopa de Letras</h1>
            <h2 className='text-center text-3xl font-bold mb-4'>CUAHUATEMOC</h2>
            {mensaje && <div className="text-green-500 font-bold mt-4 text-center mb-4">{mensaje}</div>}
            <div className='flex justify-center'>
                <div className='mb-6 text-sm w-11/12'>
                <p>
                        1. ¿Quiénes rechazaron las enseñanzas de Alma y Amulek?
                    </p>
                    <p>
                        2. ¿Qué título militar recibió Moroni?
                    </p>
                    <p>
                        3.¿Qué joven profeta fue designado guardián de las planchas después de Alma?
                    </p>
                    <p>
                        4.¿Qué grupo secreto causó destrucción entre los nefitas y lamanitas?
                    </p>
                    <p>
                        5.¿Cuál es el nombre del juez asesinado por el grupo de Kishkumen?
                    </p>
                    <p>
                        6.¿Qué sacramento introdujo Cristo entre los nefitas en su visita?
                    </p>
                    <p>
                        7.¿Qué profeta profetizó la aparición de una estrella en el cielo como confirmación del nacimiento de Cristo?
                    </p>
                    <p>
                        8.¿A quiénes se refirió Cristo como las "otras ovejas" que escucharán su voz?
                    </p>
                   <p>
                        9.Lema de las Mujeres Jóvenes: ...con una naturaleza ________y un destino eterno.
                    </p>
                    <p>
                        10.Lema de los cuórums del Sacerdocio Aarónico: ...guardaré mis ____________ y utilizaré Su sacerdocio para servir a los demás,...
                    </p>
                    <p>
                        11.Lema mutual 2024: "Soy __________ de Jesucristo"
                    </p>
                </div>
            </div>
            <div
                className="grid mb-12"
                style={{
                    gridTemplateColumns: 'repeat(15, minmax(0, 1fr))',
                }}
            >
                {sopa.map((fila, i) =>
                    fila.map((letra, j) => {
                        const coordenada = `${i}-${j}`;
                        const isSelected = seleccionadas.includes(coordenada);
                        return (
                            <div
                                key={coordenada}
                                onClick={() => handleSelect(i, j)}
                                className={`flex items-center justify-center w-6 h-6 border border-gray-800 text-lg font-semibold cursor-pointer ${isSelected ? 'bg-orange-400 text-white' : 'bg-white text-black'}`}
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
