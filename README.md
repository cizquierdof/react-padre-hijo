# Control de padres desde los hijos

Aquí tenemos dos componentes, el padre que contiene al componente hijo. En el componente padre definimos una función **metodoPadre** que lanza un *alert(saludo)*, el valor de saludo recibe el argumento *respuesta* que es enviado desde el componente hijo.

Para conseguir esto lo que hacemos es enviarle al componente hijo el método que queremos que ejecute, en este caso es *metodoPadre*. En el componente hijo utilizaremos cualquier evento, en este caso he utilizado el evento **onClick**, para que dispare la ejecución del método.

## Puntualizaciones

- En el componente padre hay que enviar el método, no la ejecución del método. Esto quiere decir que le debemos pasar el nombre del método sin los paréntesis.
- el método debe definirse en forma de función arrow, es decir de la forma:

```javascript
nombreMetodo=(args)=>{
    //aquí el código a ejecutar
}
```

- Según he leido, esta forma es aun, experimental, pero funciona en la mayoría de los casos, Si queremos escribir el método de forma normal:

```javascript
metodoPadre = function (args){
    //aquí el código a ejecutar
}
```

Entonces tenemos que enlacar el método en el costructor. Despues de los state que tengamos ponemos:

```javascript
        this.metodoPadre = this.metodoPadre.bind(this);
```

- Por último si desde el componente hijo queremos pasar argumentos a *metodoPadre*, es necesario asignarlo como función flecha en el evento, así:

```jsx
            <button className='hijo' onClick={()=>this.props.metodoPadre(saludo)}>
```

De esta forma podemos inyectar desde el hijo argumentos a un método que se ejecutará en el componente padre. En este caso le mandamos el string: 'soy el hijo' que solo está en la constante *saludo* del componente hijo. Fijate que el padre no tiene definido en ninguna parte el string ' soy el hijo', esta solo está en el hijo, y gracias a este mecanismo se ppuede utilizar en el padre.

