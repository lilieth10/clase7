function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('lili10') === 'Este campo sólo acepta letras',
    'Validar nombre no validó que el nombre solo tuviera letras'
  )

  console.assert(
    validarNombre('lilieth') === '',
    'Validar nombre no funcionó con un nombre válido'
  )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debes seleccionar una ciudad',
        'Validar ciudad no validó que se haya seleccionado una ciudad'
    );

    console.assert(
        validarCiudad('Mendoza') === '',
        'Validar ciudad no funcionó con una ciudad valida'

    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripción regalo no validó que la descipción no este vacía'
    );

    console.assert(
        validarDescripcionRegalo(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 100 caracteres',
        'Validar descripción regalo no validó que la descripción sea menor a 100 caracteres'
    );


console.assert(
    validarDescripcionRegalo( '+++-_+*') === 'Este campo solo acepta letras y numeros',
    'Validar descripcion regalo no validó que la descripción contenga letras y numeros'
);

console.assert(
    validarDescripcionRegalo('bici') === '',
    'Validar descripcion regalo no funcionó con una descripción valida'

)

}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


