<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`Pizzeria` module definition
============================

This is a sample Pizzeria application (backend and frontend)

Frontend page available on `<root>/ext/pizzeria`

Sonar analysis: `sonar-scanner -Dsonar.exclusions="**.min.js,**.min.css,ObjectExternal/pizzeria-resources/STYLES.less"`

`PzaOrder` business object definition
-------------------------------------

Order business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `pzaOrdDate`                                                 | datetime                                 | yes*     |           |          | Order date                                                                       |
| `pzaOrdName`                                                 | char(100)                                | yes      | yes       | yes      | Order name                                                                       |
| `pzaOrdPhone`                                                | phone(20)                                |          | yes       | yes      | Ordering person's phone number                                                   |
| `pzaOrdEmail`                                                | email(100)                               |          | yes       | yes      | Ordering person's email address                                                  |
| `pzaOrdAddress`                                              | char(100)                                | yes      | yes       | yes      | Address                                                                          |
| `pzaOrdCoordinates`                                          | geocoords                                |          | yes       |          | Coordinates                                                                      |
| `pzaOrdComments`                                             | text(1000000)                            |          | yes       |          | Order comments                                                                   |
| `pzaOrdStatus`                                               | enum(7) using `PZA_ORD_STATUS` list      | yes      | yes       |          | Status                                                                           |
| `pzaOrdPizId` link to **`PzaPizza`**                         | id                                       | yes      | yes       |          | Order pizza                                                                      |
| _Ref. `pzaOrdPizId.pzaPizName`_                              | _regexp(100)_                            |          |           |          | _Pizza name_                                                                     |
| _Ref. `pzaOrdPizId.pzaPizPicture`_                           | _image_                                  |          |           |          | _Pizza picture_                                                                  |
| _Ref. `pzaOrdPizId.pzaPizPrice`_                             | _float(10, 2)_                           |          |           |          | _Pizza price_                                                                    |

### Lists

* `PZA_ORD_STATUS`
    - `PND` Pending
    - `VAL` Validated
    - `DEL` Delivered
    - `CNC` Cancelled

### Custom actions

No custom action

`PzaOrderHistoric` business object definition
---------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`PzaOrder`**                          | id                                       | yes*     |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | -                                                                                |
| `pzaOrdDate`                                                 | datetime                                 | yes*     |           |          | Order date                                                                       |
| `pzaOrdStatus`                                               | enum(7) using `PZA_ORD_STATUS` list      | yes      | yes       |          | Status                                                                           |

### Lists

* `PZA_ORD_STATUS`
    - `PND` Pending
    - `VAL` Validated
    - `DEL` Delivered
    - `CNC` Cancelled

### Custom actions

No custom action

`PzaPizza` business object definition
-------------------------------------

Pizza business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `pzaPizName`                                                 | regexp(100)                              | yes*     | yes       |          | Pizza name                                                                       |
| `pzaPizPrice`                                                | float(10, 2)                             | yes      | yes       |          | Pizza price                                                                      |
| `pzaPizType`                                                 | enum(7) using `APP_PIZ_TYPE` list        | yes      | yes       |          | Pizza type                                                                       |
| `pzaPizDiameter`                                             | int(3)                                   |          | yes       |          | Pizza diameter                                                                   |
| `pzaPizPicture`                                              | image                                    |          | yes       |          | Pizza picture                                                                    |
| `pzaPizDesc`                                                 | html(10000)                              |          | yes       |          | Pizza description                                                                |
| `pzaPizVideo`                                                | url(1024)                                |          | yes       |          | -                                                                                |

### Lists

* `APP_PIZ_TYPE`
    - `THIN` Thin
    - `PAN` Pan

### Custom actions

No custom action

`pizzeria` external object definition
-------------------------------------

Pizzeria web frontend using simple Mustache templating


