![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`Pizzeria` module definition
============================

This is a sample Pizzeria application (backend and frontend)

Frontend page available on `<root>/ext/pizzeria`


`PzaOrder` business object definition
-------------------------------------

Order business object

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `pzaOrdDate`                                                 | datetime                                 | x*  |     | Order date                                                                       |
| `pzaOrdName`                                                 | char(100)                                | x   | x   | Order name                                                                       |
| `pzaOrdPhone`                                                | phone(20)                                |     | x   | Ordering person's phone number                                                   |
| `pzaOrdEmail`                                                | email(100)                               |     | x   | Ordering person's email address                                                  |
| `pzaOrdAddress`                                              | char(100)                                | x   | x   | Address                                                                          |
| `pzaOrdCoordinates`                                          | geocoords                                |     | x   | Coordinates                                                                      |
| `pzaOrdComments`                                             | text(1000000)                            |     | x   | Order comments                                                                   |
| `pzaOrdPizId` link to **`PzaPizza`**                         | id                                       | x   | x   | Order pizza                                                                      |
| _Ref. `pzaOrdPizId.pzaPizName`_                              | _regexp(100)_                            |     |     | _Pizza name_                                                                     |
| _Ref. `pzaOrdPizId.pzaPizPicture`_                           | _image_                                  |     |     | _Pizza picture_                                                                  |
| _Ref. `pzaOrdPizId.pzaPizPrice`_                             | _float(10, 2)_                           |     |     | _Pizza price_                                                                    |

### Custom actions

No custom action

`PzaPizza` business object definition
-------------------------------------

Pizza business object

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `pzaPizName`                                                 | regexp(100)                              | x*  | x   | Pizza name                                                                       |
| `pzaPizPrice`                                                | float(10, 2)                             | x   | x   | Pizza price                                                                      |
| `pzaPizType`                                                 | enum(7) using `APP_PIZ_TYPE` list        | x   | x   | Pizza type                                                                       |
| `pzaPizDiameter`                                             | int(3)                                   |     | x   | Pizza diameter                                                                   |
| `pzaPizPicture`                                              | image                                    |     | x   | Pizza picture                                                                    |
| `pzaPizDesc`                                                 | html(10000)                              |     | x   | Pizza description                                                                |

### Lists

* `APP_PIZ_TYPE`
    - `THIN` Thin
    - `PAN` Pan

### Custom actions

No custom action

