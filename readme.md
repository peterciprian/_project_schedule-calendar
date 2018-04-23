# Schedule Calendar

Yellowroad Full-stack web developer képzés komplex projektfeladat (4. hónap eleje)
Tennivalók cetliken, határidővel.

## Hogy miből is van

* Adatbázis: [MongoDB](http://www.mongodb.org/)
* Backend: [Node.js](http://nodejs.org/)
* Frontend [Angular](http://www.angular.io/)
* CSS [Bootstrap v4](http://getbootstrap.com/) alapon
## Kezdjük:

Kezdésként telepíteni kell a  Node.js-t majd a  további fejlesztőeszközöket. Node.js saját csomagkezelővel rendelkezik [npm](http://npmjs.org) a NodeJS alkalmazásokhoz és könyvtárakhoz.
* [node.js](http://nodejs.org/download/) 
* Telepítsd a Grunt-CLI-t és Karma-t globálisan:

    ```
    npm install -g grunt-cli karma
    ```

* klónozd a projektet [innen](https://github.com/peterciprian/_project_schedule-calendar.git)
### Telepítés

A frontend és backend mappákban értelemszerű tartalom foglal helyet.
Telepítéskor mindkét mappában telepítjük a package.json-ban leírt függőségeket.

Kezdjük a frontenden:

```
cd _frontend
npm i
```
Eltarthat egy kis ideig a telepítés. Ha kész, a backend következik:

```
cd .. & cd _backend
npm i
```
Ha ezzel megvagyunk, munkába is állíthatjuk az alkalmazást!

### Szerver

A remek jó szerverünket a

```
cd _backend
nodemon start
```
paranccsal röffenthetjük be. Tegyük is meg szépen, innentől remekül dolgozik nekünk.
Ne felejtsük a szerverünk, a localhost:3002 porton fut.

### Maga az alkalmazás

Az appot a következősorokkal bírhatjuk működésre:

```
cd _frontend
npm start
```

A frontend applikáció majd a localhost:4200-as porton fog figyelni, nyissunk egy böngészőt és eresszük rá.
És láss csodát! Megy is (ha minden igaz...)

A kifogástalan design és a felhasználóbarát felület talán nem szorul magyarázatra, hisz önmagáért beszél.
## Szerezte
(*..innen - onnan..*)
* **Oláh Péter Ciprián** - *junior developer tanonc* (https://github.com/peterciprian)
