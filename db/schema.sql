CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    no_econ VARCHAR(50),
    usuario VARCHAR(100),
    destino VARCHAR(100),
    salida VARCHAR(100),
    entrada VARCHAR(100),
    fecha DATE
);