## Informe Práctica 7
### Digitalizando la colección de música de los abuelos

En la primera práctica grupal que nos compete, se nos pide que realicemos mediante diseño orientado a objetos una biblioteca de música. Para realizar esta tarea, tendremos que hacer uso de varias clases, las cuales comentaremos una a una a continuación. Después, con respecto al funcionamiento, se nos pide que incluyamos al menos 50 canciones distintas, 10 géneros musicales, 5 grupos, 5 artistas, entre 5 y 10 álbumes y 3 playlists. Una vez realizado esto, la clase más importante será la clase Gestor, la cual nos permitirá gestionar el tratamiento avanzado de las playlists.

Lo primero que tenemos que comentar, antes de entrar en las clases específicas, es la clase `ItemsCollection<T>`. Con esta crearemos colecciones de objetos genéricos, pero más adelante crearemos colecciones pero con las distintas clases, como por ejemplo `new ItemsCollection<Artist>`. En esta clase, los métodos que tendremos serán el de obtener la lista, añadir un elemento a la lista, buscar un elemento en la lista y obtener su tamaño.
  
```
  
  
  
```

En primer lugar, una vez comentada la clase collection, la primera clase que encontramos es la clase musicGenre, que englobará todos los géneros musicales. Esta tendrá varios atributos: los grupos o artistas relacionados con el género, los álbumes, las canciones y el nombre del género. Dicho esto, lo que tendremos a continuación serán todos los getters de los atributos, que desarrollamos apoyándonos en la clase collection.
  
 ```
  
  
 ```
 
La siguiente clase a analizar, es la clase song. En esta definiremos cada canción dentro del álbum o playlist. Tendrá varios atributos, como su nombre, creador, duración, géneros, si es un single o no y el número de reproducciones. Como en el caso anterior, esta clase solo contiene los getters de todos los atributos mencionados.

```


```

La próxima será la clase álbum, la cual tiene como atributos el nombre, el creador, el año de publicación y una lista con las canciones. Una vez más lo que veremos como métodos serán los getters, que obtendremos estos valores con bucles forEach y con la ayuda de nuestra clase collections.

```


```



theme:cayman
