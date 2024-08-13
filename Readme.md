# API de Nanoglow


## Para generar una nueva migración de un modelo existente
Al ejecutar `npm run start` se crearán las migraciones nuevas pero de manera errónea (por parte de la herramienta)

Para solucionar eso, se debe reemplazar lo siguiente:

```js
"use strict";
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TABLE", {
      // ... OTROS CAMPOS
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TABLE");
  },
};
```

Y en su lugar se debe hacer lo siguiente:

> Si se agrega una nueva columna a una tabla

```js
"use strict";
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("TABLE", "NOMBRE_COLUMNA_NUEVA", {
        type: Sequelize.TIPO_DE_DATO,
        allowNull: true // o false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TABLE", "NOMBRE_COLUMNA_NUEVA");
  },
};
```

> Si se agrega una nueva tabla

```js
"use strict";
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TABLE", {
      // ... ATRIBUTOS
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TABLE");
  },
};
```