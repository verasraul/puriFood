/* 

Request URL = https://api.edamam.com/api/recipes/v2?type=public&q=turmeric&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0

Request Params =    q = bananas
                    app_id = 87952f56
                    app_key = <your_key>

Response Body = 
[            {
              "from": 1,
              "to": 20,
              "count": 10000,
              "_links": {
                "next": {
                  "href": "https://api.edamam.com/api/recipes/v2?q=turmeric&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0&_cont=CHcVQBtNNQphDmgVQntAEX4BYVVtBQQEQ2JJAWoXZVN0DQUAUXlSUjQQZV1yDApVETcTUTYXYFV1VgQBQmdEVmtGYgRzBwEVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=87952f56",
                  "title": "Next page"
                }
              },
              "hits": [
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_01368a32b55ea95ff0239110653109f8",
                    "label": "Turmeric Cashews",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/496/4967c571b67a01cc939fe5d8a102c915.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f98c0a3dce7e9938cd626660c2029c01e441d98395e8f5063ab93eb2061bc26b",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/496/4967c571b67a01cc939fe5d8a102c915-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=923a5d2ebb7eee47fae22bac4f323a49ba35a346a6fe8c3ca1e1e55f787c6bdf",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/496/4967c571b67a01cc939fe5d8a102c915-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab5cdc071dadf22f855df275b48ed2ffcd90c9b2723a58620edf23dab68c2ae3",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/496/4967c571b67a01cc939fe5d8a102c915.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f98c0a3dce7e9938cd626660c2029c01e441d98395e8f5063ab93eb2061bc26b",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "101 Cookbooks",
                    "url": "http://www.101cookbooks.com/archives/turmeric-cashews-recipe.html",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-cashews-01368a32b55ea95ff0239110653109f8/turmeric",
                    "yield": 6,
                    "dietLabels": [
                      "Low-Carb",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "2 cups raw cashews",
                      "1/2 tablespoon toasted sesame oil, plus more if needed",
                      "scant 1/4 teaspoon fine grain sea salt, or to taste",
                      "half an 8x8-inch sheet nori seaweed",
                      "1 1/2 teaspoons sesame seeds",
                      "scant 1/4 teaspoon cayenne",
                      "1/2 tablespoon ground turmeric"
                    ],
                    "ingredients": [
                      {
                        "text": "2 cups raw cashews",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "cashews",
                        "weight": 280,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aa3vawdabgm9zmapkfl78bk049g2",
                        "image": "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg"
                      },
                      {
                        "text": "1/2 tablespoon toasted sesame oil, plus more if needed",
                        "quantity": 0.5,
                        "measure": "tablespoon",
                        "food": "toasted sesame oil",
                        "weight": 6.8,
                        "foodCategory": "Oils",
                        "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                        "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                      },
                      {
                        "text": "scant 1/4 teaspoon fine grain sea salt, or to taste",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "fine grain sea salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                        "text": "half an 8x8-inch sheet nori seaweed",
                        "quantity": 0.5,
                        "measure": "sheet",
                        "food": "seaweed",
                        "weight": 1.3,
                        "foodCategory": "vegetables",
                        "foodId": "food_bn5prizbgsrr0tact46ataaj7b5p",
                        "image": "https://www.edamam.com/food-img/193/1935b3e53c576e0f097393084d11b629.jpg"
                      },
                      {
                        "text": "1 1/2 teaspoons sesame seeds",
                        "quantity": 1.5,
                        "measure": "teaspoon",
                        "food": "sesame seeds",
                        "weight": 4.500000000228246,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
                        "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
                      },
                      {
                        "text": "scant 1/4 teaspoon cayenne",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "cayenne",
                        "weight": 0.45,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                        "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
                      },
                      {
                        "text": "1/2 tablespoon ground turmeric",
                        "quantity": 0.5,
                        "measure": "tablespoon",
                        "food": "ground turmeric",
                        "weight": 4.7,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      }
                    ],
                    "calories": 1650.847000001308,
                    "totalWeight": 299.2500000002282,
                    "totalTime": 13,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "breakfast"
                    ],
                    "dishType": [
                      "sandwiches"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1650.847000001308,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 132.0492550001134,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 23.172914000015883,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0026320000000000002,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 70.20915800004283,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 25.856012000049695,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 89.06409500005353,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.964200000026935,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 16.76527000000069,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 52.39838500004047,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 617.4930000000252,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 157.30700000222538,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 843.896000000801,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1980.631000001068,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 22.00720000003321,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 16.77056000001769,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 1704.830500001436,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 12.744500000000002,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.2837,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.2254710000018056,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.1904985000005638,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.298489500010305,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.2212710000018032,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 77.6800000002214,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 77.6800000002214,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.981895000000571,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 97.44795000000005,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 16.519615000010706,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 82.5423500000654,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 203.15270000017443,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 115.86457000007942,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 29.68803166668451,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 43.85680000010774,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 104.79677000008094,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 25.72887500000105,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 15.730700000222537,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 200.92761904780977,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 42.141085106405704,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 122.26222222240673,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 152.45963636379716,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 243.5472142859194,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1.4160555555555558,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.5374444444444446,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 102.1225833334838,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 14.653730769274135,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 20.615559375064407,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 93.94392307706178,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 19.42000000005535,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 19.879300000003806,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 81.20662500000005,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 132.0492550001134,
                        "hasRDI": true,
                        "daily": 203.15270000017443,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 23.172914000015883,
                            "hasRDI": true,
                            "daily": 115.86457000007942,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.0026320000000000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 70.20915800004283,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 25.856012000049695,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 89.06409500005353,
                        "hasRDI": true,
                        "daily": 29.68803166668451,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 10.964200000026935,
                            "hasRDI": true,
                            "daily": 43.85680000010774,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 16.76527000000069,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 52.39838500004047,
                        "hasRDI": true,
                        "daily": 104.79677000008094,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 617.4930000000252,
                        "hasRDI": true,
                        "daily": 25.72887500000105,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 157.30700000222538,
                        "hasRDI": true,
                        "daily": 15.730700000222537,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 843.896000000801,
                        "hasRDI": true,
                        "daily": 200.92761904780977,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1980.631000001068,
                        "hasRDI": true,
                        "daily": 42.141085106405704,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 22.00720000003321,
                        "hasRDI": true,
                        "daily": 122.26222222240673,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 16.77056000001769,
                        "hasRDI": true,
                        "daily": 152.45963636379716,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1704.830500001436,
                        "hasRDI": true,
                        "daily": 243.5472142859194,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 12.744500000000002,
                        "hasRDI": true,
                        "daily": 1.4160555555555558,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 2.2837,
                        "hasRDI": true,
                        "daily": 2.5374444444444446,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.2254710000018056,
                        "hasRDI": true,
                        "daily": 102.1225833334838,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.1904985000005638,
                        "hasRDI": true,
                        "daily": 14.653730769274135,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.298489500010305,
                        "hasRDI": true,
                        "daily": 20.615559375064407,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.2212710000018032,
                        "hasRDI": true,
                        "daily": 93.94392307706178,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 77.6800000002214,
                        "hasRDI": true,
                        "daily": 19.42000000005535,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 77.6800000002214,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.981895000000571,
                        "hasRDI": true,
                        "daily": 19.879300000003806,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 97.44795000000005,
                        "hasRDI": true,
                        "daily": 81.20662500000005,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 16.519615000010706,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/01368a32b55ea95ff0239110653109f8?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_848be4fe62e9a0b0817886b647021118",
                    "label": "Turmeric Tonic",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/304/304d4d24093ea298311010e638df1b97.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aca8ed15fea6b0f18cb05a7b42266ffd6a1d830e809bd4763e64403e078f4c0b",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/304/304d4d24093ea298311010e638df1b97-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b8e144b31625b5e4f31ae7bf3e374bd8a1ead0c4238ecf9b54f9d899b585ca30",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/304/304d4d24093ea298311010e638df1b97-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c0200a10265b1347e9e4ca07934506e6a657a5d58d969a1a714365bec49a91a",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/304/304d4d24093ea298311010e638df1b97.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aca8ed15fea6b0f18cb05a7b42266ffd6a1d830e809bd4763e64403e078f4c0b",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Martha Stewart",
                    "url": "https://www.marthastewart.com/1104528/turmeric-tonic",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-tonic-848be4fe62e9a0b0817886b647021118/turmeric",
                    "yield": 2,
                    "dietLabels": [
                      "Low-Fat",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Kosher"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "1/2 cup fresh lemon juice (from 2 lemons)",
                      "1/4 cup honey",
                      "1/4 cup fresh turmeric juice",
                      "1 1/4 cups (10 ounces) sparkling water"
                    ],
                    "ingredients": [
                      {
                        "text": "1/2 cup fresh lemon juice (from 2 lemons)",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "lemon juice",
                        "weight": 122,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                      },
                      {
                        "text": "1/4 cup honey",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "honey",
                        "weight": 84.75,
                        "foodCategory": null,
                        "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                      },
                      {
                        "text": "1/4 cup fresh turmeric juice",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "turmeric",
                        "weight": 37.6000000006357,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1 1/4 cups (10 ounces) sparkling water",
                        "quantity": 10,
                        "measure": "ounce",
                        "food": "sparkling water",
                        "weight": 283.49523125,
                        "foodCategory": "flavored water",
                        "foodId": "food_aqqa7ffbnno3ccbtnhqx8bvaaetb",
                        "image": "https://www.edamam.com/food-img/6fe/6feb3b289f54d4d2f9e10a04292acf9b.jpg"
                      }
                    ],
                    "calories": 401.79200000198335,
                    "totalWeight": 527.8452312506357,
                    "totalTime": 5,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "drinks"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 401.79200000198335,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 1.5148000000206603,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.7398880000116842,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.021056000000355995,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 0.1761440000028543,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.3098760000048059,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 103.49664000042682,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.070700000144305,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 73.87806000002041,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 69.59670000000001,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 4.320930000061535,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 51.61638006267164,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 169.12642631356798,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 118.40747543882226,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 957.4799046382226,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 21.133550000349636,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 1.9394500000286066,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 125.57400000190076,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 47.90095000000446,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.051088000000368713,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.10690500000095354,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.7211675000085821,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.1166920000006802,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 33.61500000012714,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 33.61500000012714,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.8486800000281616,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.0384000000851845,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 415.29553363445666,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 20.089600000099168,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 2.3304615384933234,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 3.699440000058421,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 34.49888000014227,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 36.28280000057722,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 8.64186000012307,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 2.1506825026113185,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 16.912642631356796,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 28.19225605686244,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 20.371912864643036,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 117.40861111305354,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 17.631363636623696,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 17.939142857414392,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 53.223277777782734,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 4.25733333336406,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 8.223461538534888,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.507296875053638,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 8.976307692360015,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 8.403750000031785,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.324533333521078,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.198666666737654,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 1.5148000000206603,
                        "hasRDI": true,
                        "daily": 2.3304615384933234,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.7398880000116842,
                            "hasRDI": true,
                            "daily": 3.699440000058421,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.021056000000355995,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.1761440000028543,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.3098760000048059,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 103.49664000042682,
                        "hasRDI": true,
                        "daily": 34.49888000014227,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 9.070700000144305,
                            "hasRDI": true,
                            "daily": 36.28280000057722,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 73.87806000002041,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 69.59670000000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 4.320930000061535,
                        "hasRDI": true,
                        "daily": 8.64186000012307,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 51.61638006267164,
                        "hasRDI": true,
                        "daily": 2.1506825026113185,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 169.12642631356798,
                        "hasRDI": true,
                        "daily": 16.912642631356796,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 118.40747543882226,
                        "hasRDI": true,
                        "daily": 28.19225605686244,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 957.4799046382226,
                        "hasRDI": true,
                        "daily": 20.371912864643036,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 21.133550000349636,
                        "hasRDI": true,
                        "daily": 117.40861111305354,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.9394500000286066,
                        "hasRDI": true,
                        "daily": 17.631363636623696,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 125.57400000190076,
                        "hasRDI": true,
                        "daily": 17.939142857414392,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 47.90095000000446,
                        "hasRDI": true,
                        "daily": 53.223277777782734,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.051088000000368713,
                        "hasRDI": true,
                        "daily": 4.25733333336406,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.10690500000095354,
                        "hasRDI": true,
                        "daily": 8.223461538534888,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.7211675000085821,
                        "hasRDI": true,
                        "daily": 4.507296875053638,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.1166920000006802,
                        "hasRDI": true,
                        "daily": 8.976307692360015,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 33.61500000012714,
                        "hasRDI": true,
                        "daily": 8.403750000031785,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 33.61500000012714,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.8486800000281616,
                        "hasRDI": true,
                        "daily": 12.324533333521078,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 5.0384000000851845,
                        "hasRDI": true,
                        "daily": 4.198666666737654,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 415.29553363445666,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/848be4fe62e9a0b0817886b647021118?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3e8dc82c424558ab4c4c59368f976e44",
                    "label": "Turmeric Yellow Food Dye",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/47d/47d9d699d559978dbd45cd7b4d38a3d9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b78f4fe352e04c88d2999ed105fa93d4ff3672d8d6459b6a5052125dfb749562",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/47d/47d9d699d559978dbd45cd7b4d38a3d9-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a2fe2144521e3edd516397603135f44a8b81d832778f74d41a047b6ff6bfbb6b",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/47d/47d9d699d559978dbd45cd7b4d38a3d9-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3bfe557788d70b86d29586c59fd6ba0893839c707f8dcd9bda0793bda4db0356",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/47d/47d9d699d559978dbd45cd7b4d38a3d9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b78f4fe352e04c88d2999ed105fa93d4ff3672d8d6459b6a5052125dfb749562",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Epicurious",
                    "url": "https://www.epicurious.com/recipes/food/views/turmeric-yellow-food-dye",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-yellow-food-dye-3e8dc82c424558ab4c4c59368f976e44/turmeric",
                    "yield": 2,
                    "dietLabels": [
                      "Low-Fat",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Low Potassium",
                      "Kidney-Friendly",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "FODMAP-Free",
                      "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "1/3 cup sugar",
                      "4 teaspoons ground turmeric"
                    ],
                    "ingredients": [
                      {
                        "text": "1/3 cup sugar",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 66.66666666666666,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                      },
                      {
                        "text": "4 teaspoons ground turmeric",
                        "quantity": 4,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 12,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      }
                    ],
                    "calories": 295.44,
                    "totalWeight": 78.66666666666666,
                    "totalTime": 0,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "condiments and sauces"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 295.44,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.39,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.22056,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00672,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 0.05388,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.09072,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 74.71013333333333,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.7239999999999998,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 66.91853333333333,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 66.53333333333333,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 1.1616,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 3.9066666666666663,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 20.826666666666668,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 24.96,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 250.93333333333334,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 6.633333333333333,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.5466666666666667,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 35.879999999999995,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.08399999999999999,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.00696,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.030666666666666665,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.162,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.012839999999999999,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2.4,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 2.4,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.5316,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1.6079999999999999,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 1.5553333333333332,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 14.772,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.6,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 1.1028,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 24.903377777777777,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.895999999999999,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 2.3232,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 0.16277777777777777,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 2.082666666666667,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 5.942857142857143,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 5.339007092198582,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 36.85185185185185,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 4.96969696969697,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 5.1257142857142854,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.09333333333333332,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.58,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.3589743589743586,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.0125,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.9876923076923075,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.6,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.5439999999999996,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1.3399999999999999,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 0.39,
                        "hasRDI": true,
                        "daily": 0.6,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.22056,
                            "hasRDI": true,
                            "daily": 1.1028,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00672,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.05388,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.09072,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 74.71013333333333,
                        "hasRDI": true,
                        "daily": 24.903377777777777,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 2.7239999999999998,
                            "hasRDI": true,
                            "daily": 10.895999999999999,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 66.91853333333333,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 66.53333333333333,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 1.1616,
                        "hasRDI": true,
                        "daily": 2.3232,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3.9066666666666663,
                        "hasRDI": true,
                        "daily": 0.16277777777777777,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 20.826666666666668,
                        "hasRDI": true,
                        "daily": 2.082666666666667,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 24.96,
                        "hasRDI": true,
                        "daily": 5.942857142857143,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 250.93333333333334,
                        "hasRDI": true,
                        "daily": 5.339007092198582,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.633333333333333,
                        "hasRDI": true,
                        "daily": 36.85185185185185,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.5466666666666667,
                        "hasRDI": true,
                        "daily": 4.96969696969697,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 35.879999999999995,
                        "hasRDI": true,
                        "daily": 5.1257142857142854,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.08399999999999999,
                        "hasRDI": true,
                        "daily": 0.09333333333333332,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.00696,
                        "hasRDI": true,
                        "daily": 0.58,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.030666666666666665,
                        "hasRDI": true,
                        "daily": 2.3589743589743586,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.162,
                        "hasRDI": true,
                        "daily": 1.0125,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.012839999999999999,
                        "hasRDI": true,
                        "daily": 0.9876923076923075,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 2.4,
                        "hasRDI": true,
                        "daily": 0.6,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 2.4,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.5316,
                        "hasRDI": true,
                        "daily": 3.5439999999999996,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1.6079999999999999,
                        "hasRDI": true,
                        "daily": 1.3399999999999999,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1.5553333333333332,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/3e8dc82c424558ab4c4c59368f976e44?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_420ccebb08a8366af52535c3c0366a2e",
                    "label": "Miracle turmeric soup",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bed/bede21c833072c4e89e57eaf4899c8c1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39af651d15f47fdc176bf10229b4d65e52d332b8aad3a4702c55b070036207fd",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bed/bede21c833072c4e89e57eaf4899c8c1-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5a5eb182d6f95a9f33a50180899b2cd04f707e5549234971b0712babfa884d7c",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bed/bede21c833072c4e89e57eaf4899c8c1-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c45fd013c0034933170dd4a07d1c57020d61a65ce2b3ec222dc0d8ab4ea27e1",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bed/bede21c833072c4e89e57eaf4899c8c1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39af651d15f47fdc176bf10229b4d65e52d332b8aad3a4702c55b070036207fd",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bed/bede21c833072c4e89e57eaf4899c8c1-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2987c417634bc76047342a4e0e7968d7927264b10c87d656f824dda7d969e121",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "Food52",
                    "url": "https://food52.com/recipes/20823-miracle-turmeric-soup",
                    "shareAs": "http://www.edamam.com/recipe/miracle-turmeric-soup-420ccebb08a8366af52535c3c0366a2e/turmeric",
                    "yield": 3,
                    "dietLabels": [
                      "Low-Fat",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Low Potassium",
                      "Kidney-Friendly",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "FODMAP-Free",
                      "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "2 teaspoons Turmeric powder",
                      "1.5 cups water",
                      "2 tablespoons sugar or to taste",
                      "4 pieces cloves"
                    ],
                    "ingredients": [
                      {
                        "text": "2 teaspoons Turmeric powder",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "Turmeric",
                        "weight": 6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1.5 cups water",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "water",
                        "weight": 355.5,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      },
                      {
                        "text": "2 tablespoons sugar or to taste",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                      },
                      {
                        "text": "4 pieces cloves",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "cloves",
                        "weight": 0.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                        "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
                      }
                    ],
                    "calories": 117.11399999836455,
                    "totalWeight": 387.09999999957745,
                    "totalTime": 0,
                    "cuisineType": [
                      "chinese"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "soup"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 117.11399999836453,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.273,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.133992,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.004884,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 0.035297999999999996,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.066996,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 29.416579999577486,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.5654,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 25.156879999578244,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 24.949999999578246,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 0.61662,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 17.75199999999577,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 24.78699999999578,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 17.589,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 131.41999999999155,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 3.383479999999788,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.3219699999999578,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 18.563999999999997,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.048,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.043199999999999995,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.004428,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.015069999999919707,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.09036,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.008766,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1.3499999999999999,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 1.3499999999999999,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.31872,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1.6547999999999998,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 355.97972,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5.855699999918226,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.42,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.66996,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 9.805526666525829,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.2616,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 1.23324,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 0.7396666666664905,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 2.478699999999578,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 4.187857142857142,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 2.7961702127657775,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 18.797111111109935,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 2.9269999999996164,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 2.6519999999999997,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.005333333333333333,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.047999999999999994,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.369,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.159230769224593,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.56475,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.6743076923076923,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.3375,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.1248,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1.379,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 0.273,
                        "hasRDI": true,
                        "daily": 0.42,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.133992,
                            "hasRDI": true,
                            "daily": 0.66996,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.004884,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.035297999999999996,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.066996,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 29.416579999577486,
                        "hasRDI": true,
                        "daily": 9.805526666525829,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 1.5654,
                            "hasRDI": true,
                            "daily": 6.2616,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 25.156879999578244,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 24.949999999578246,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 0.61662,
                        "hasRDI": true,
                        "daily": 1.23324,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 17.75199999999577,
                        "hasRDI": true,
                        "daily": 0.7396666666664905,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 24.78699999999578,
                        "hasRDI": true,
                        "daily": 2.478699999999578,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 17.589,
                        "hasRDI": true,
                        "daily": 4.187857142857142,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 131.41999999999155,
                        "hasRDI": true,
                        "daily": 2.7961702127657775,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.383479999999788,
                        "hasRDI": true,
                        "daily": 18.797111111109935,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.3219699999999578,
                        "hasRDI": true,
                        "daily": 2.9269999999996164,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 18.563999999999997,
                        "hasRDI": true,
                        "daily": 2.6519999999999997,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0.048,
                        "hasRDI": true,
                        "daily": 0.005333333333333333,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.043199999999999995,
                        "hasRDI": true,
                        "daily": 0.047999999999999994,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.004428,
                        "hasRDI": true,
                        "daily": 0.369,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.015069999999919707,
                        "hasRDI": true,
                        "daily": 1.159230769224593,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.09036,
                        "hasRDI": true,
                        "daily": 0.56475,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.008766,
                        "hasRDI": true,
                        "daily": 0.6743076923076923,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1.3499999999999999,
                        "hasRDI": true,
                        "daily": 0.3375,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 1.3499999999999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.31872,
                        "hasRDI": true,
                        "daily": 2.1248,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1.6547999999999998,
                        "hasRDI": true,
                        "daily": 1.379,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 355.97972,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/420ccebb08a8366af52535c3c0366a2e?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_167400137fc8c2212b732a96e508db6b",
                    "label": "Ginger-Turmeric Margarita recipes",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/079/079d7c8b9bb724928247926e4765a7af?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=caaac34f16d4cf1e3f1c10466b5a6404b4cee8cc1045c962642254d6c041cb72",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/079/079d7c8b9bb724928247926e4765a7af-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5950ef4e9ae639e65e808314f2c46292e11c4881bee8148f0853644d46f3638f",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/079/079d7c8b9bb724928247926e4765a7af-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83be06b922e4687f093146c9fe11a987bc61418b185fffc78124a031853cb256",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/079/079d7c8b9bb724928247926e4765a7af?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=caaac34f16d4cf1e3f1c10466b5a6404b4cee8cc1045c962642254d6c041cb72",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Food Republic",
                    "url": "http://www.foodrepublic.com/2017/01/06/padma-lakshmis-ginger-turmeric-margarita/",
                    "shareAs": "http://www.edamam.com/recipe/ginger-turmeric-margarita-recipes-167400137fc8c2212b732a96e508db6b/turmeric",
                    "yield": 4,
                    "dietLabels": [
                      "Low-Fat",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Low Potassium",
                      "Kidney-Friendly",
                      "Keto-Friendly",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "No oil added",
                      "Kosher",
                      "Alcohol-Cocktail"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "2 ounces Patrón silver tequila",
                      "1 ounce ginger-turmeric simple syrup*",
                      "1 tablespoon fresh lime juice",
                      "3-4 fresh mint leaves"
                    ],
                    "ingredients": [
                      {
                        "text": "2 ounces Patrón silver tequila",
                        "quantity": 2,
                        "measure": "ounce",
                        "food": "tequila",
                        "weight": 56.69904625,
                        "foodCategory": "liquors and cocktails",
                        "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                        "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
                      },
                      {
                        "text": "1 ounce ginger-turmeric simple syrup*",
                        "quantity": 1,
                        "measure": "ounce",
                        "food": "simple syrup",
                        "weight": 28.349523125,
                        "foodCategory": "sugars",
                        "foodId": "food_aftzb4hav0begxbvchpd3bhc9368",
                        "image": "https://www.edamam.com/food-img/198/198cf875b0112c3798592532e502e664.jpg"
                      },
                      {
                        "text": "1 tablespoon fresh lime juice",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 15.399999999739633,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                      },
                      {
                        "text": "3-4 fresh mint leaves",
                        "quantity": 3.5,
                        "measure": "<unit>",
                        "food": "mint leaves",
                        "weight": 0.525,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                      }
                    ],
                    "calories": 211.31601404368493,
                    "totalWeight": 100.97356937473964,
                    "totalTime": 3,
                    "cuisineType": [
                      "world"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "alcohol-cocktail"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 211.31601404368493,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.014612499999817744,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.002234749999979171,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 0.0013632499999791708,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.005610499999940116,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 22.07567371360308,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.09729999999895854,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 21.012110927495605,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 20.751850927500005,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 0.08195249999890646,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 17.475213874994793,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 6.886188006213549,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 4.397702312479171,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 39.41668049344537,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 1.119439950999766,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.09458621243729172,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 7.00692369996355,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1.3737499999947926,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.68982499992189,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.04451582283743491,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.022506425724960945,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.06256539913713027,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.007248490462401061,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2.0912499999739635,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 2.0912499999739635,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.033879999999427195,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.0923999999984378,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 59.563238314763616,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 10.565800702184246,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 0.022480769230488834,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.011173749999895854,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 7.3585579045343605,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.38919999999583416,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 0.1639049999978129,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 0.7281339114581163,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 0.6886188006213549,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 1.0470719791617076,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 0.8386527764562844,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 6.219110838887588,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.8598746585208339,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 1.0009890999947928,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.1526388888883103,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 5.210916666579878,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 3.709651903119576,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.731263517304688,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.3910337446070642,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5575761894154662,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.5228124999934909,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.22586666666284796,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.07699999999869817,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 0.014612499999817744,
                        "hasRDI": true,
                        "daily": 0.022480769230488834,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.002234749999979171,
                            "hasRDI": true,
                            "daily": 0.011173749999895854,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.0013632499999791708,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.005610499999940116,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 22.07567371360308,
                        "hasRDI": true,
                        "daily": 7.3585579045343605,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 0.09729999999895854,
                            "hasRDI": true,
                            "daily": 0.38919999999583416,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 21.012110927495605,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 20.751850927500005,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 0.08195249999890646,
                        "hasRDI": true,
                        "daily": 0.1639049999978129,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 17.475213874994793,
                        "hasRDI": true,
                        "daily": 0.7281339114581163,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 6.886188006213549,
                        "hasRDI": true,
                        "daily": 0.6886188006213549,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 4.397702312479171,
                        "hasRDI": true,
                        "daily": 1.0470719791617076,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 39.41668049344537,
                        "hasRDI": true,
                        "daily": 0.8386527764562844,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 1.119439950999766,
                        "hasRDI": true,
                        "daily": 6.219110838887588,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.09458621243729172,
                        "hasRDI": true,
                        "daily": 0.8598746585208339,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 7.00692369996355,
                        "hasRDI": true,
                        "daily": 1.0009890999947928,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1.3737499999947926,
                        "hasRDI": true,
                        "daily": 0.1526388888883103,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 4.68982499992189,
                        "hasRDI": true,
                        "daily": 5.210916666579878,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.04451582283743491,
                        "hasRDI": true,
                        "daily": 3.709651903119576,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.022506425724960945,
                        "hasRDI": true,
                        "daily": 1.731263517304688,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.06256539913713027,
                        "hasRDI": true,
                        "daily": 0.3910337446070642,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.007248490462401061,
                        "hasRDI": true,
                        "daily": 0.5575761894154662,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 2.0912499999739635,
                        "hasRDI": true,
                        "daily": 0.5228124999934909,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 2.0912499999739635,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.033879999999427195,
                        "hasRDI": true,
                        "daily": 0.22586666666284796,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 0.0923999999984378,
                        "hasRDI": true,
                        "daily": 0.07699999999869817,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 59.563238314763616,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/167400137fc8c2212b732a96e508db6b?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8e7a462202c200a0f9e15c662c5f0de3",
                    "label": "Miso-Turmeric Dressing recipes",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b7d/b7dd6edef12e37d99630d1a283f2ee4f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e8f35eea224e06bde34c6d10da920d29095af48240d255d92caa7301570ae59",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b7d/b7dd6edef12e37d99630d1a283f2ee4f-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=611ebfd0af10624d8cb635bd6b8749ddb5058c1bf58a8258f5b509e9bcad6f2c",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b7d/b7dd6edef12e37d99630d1a283f2ee4f-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64d85ea25be21c1a4f65df13db9018fbd8d166d4b423cdbc3923481eb1d5aa3a",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b7d/b7dd6edef12e37d99630d1a283f2ee4f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e8f35eea224e06bde34c6d10da920d29095af48240d255d92caa7301570ae59",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Bon Appetit",
                    "url": "http://www.bonappetit.com/recipe/miso-turmeric-dressing",
                    "shareAs": "http://www.edamam.com/recipe/miso-turmeric-dressing-recipes-8e7a462202c200a0f9e15c662c5f0de3/turmeric",
                    "yield": 1,
                    "dietLabels": [
                      "Low-Carb"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Sulfite-Free",
                      "Kosher"
                    ],
                    "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "⅓ cup unseasoned rice vinegar",
                      "¼ cup mirin",
                      "¼ cup vegetable oil",
                      "2 tablespoons finely grated carrot",
                      "2 tablespoons white miso",
                      "1 tablespoon finely grated peeled ginger",
                      "2 teaspoons finely grated peeled turmeric or ½ teaspoon ground turmeric",
                      "1 teaspoon toasted sesame oil"
                    ],
                    "ingredients": [
                      {
                        "text": "⅓ cup unseasoned rice vinegar",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "rice vinegar",
                        "weight": 79.33333333333333,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_axlcd4tack2d20bveizm4ayu0h2w",
                        "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
                      },
                      {
                        "text": "¼ cup mirin",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "mirin",
                        "weight": 58.2,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                      },
                      {
                        "text": "¼ cup vegetable oil",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "vegetable oil",
                        "weight": 56.00000000094679,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                      },
                      {
                        "text": "2 tablespoons finely grated carrot",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "carrot",
                        "weight": 15.99999999972948,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                        "text": "2 tablespoons white miso",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "miso",
                        "weight": 34,
                        "foodCategory": null,
                        "foodId": "food_bu8imjua16o32cao2m4kravexpo7",
                        "image": "https://www.edamam.com/food-img/352/3525e5a38bb13c74aa34ef6c0273bf33.jpg"
                      },
                      {
                        "text": "1 tablespoon finely grated peeled ginger",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "peeled ginger",
                        "weight": 5.99999999989856,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      },
                      {
                        "text": "2 teaspoons finely grated peeled turmeric or ½ teaspoon ground turmeric",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1 teaspoon toasted sesame oil",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "toasted sesame oil",
                        "weight": 4.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                        "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                      }
                    ],
                    "calories": 724.8280000081776,
                    "totalWeight": 260.03333333390816,
                    "totalTime": 20,
                    "cuisineType": [
                      "japanese"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "condiments and sauces"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 724.8280000081776,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 62.82180000094538,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 4.80080000006134,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.4328800000072619,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 42.562160000681416,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 12.614060000161409,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 18.568933333289394,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.765999999990397,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 3.1927333333187864,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 5.104399999995638,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1283.7106666664668,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 43.3699999998945,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 37.58533333325725,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 288.43666666538,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 4.31259999999858,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 1.2187733333323392,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 86.30533333320417,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 134.95999999774116,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.2859999999789673,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.048859999999796094,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.09953999999980861,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.59131999999658,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.1057599999994644,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 11.359999999937443,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 11.359999999937443,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.027200000000000002,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.66140000020435,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 13.495999999964193,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 155.07853333301446,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 36.24140000040888,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 96.6489230783775,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 24.0040000003067,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 6.189644444429798,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 15.063999999961588,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 10.208799999991276,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 53.48794444443611,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 4.33699999998945,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 8.948888888870774,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 6.136950354582554,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 23.958888888880995,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 11.079757575748538,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 12.329333333314883,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 14.995555555304573,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.4288888888655191,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 4.071666666649675,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 7.656923076908355,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.695749999978625,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 8.135384615343416,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2.839999999984361,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.1333333333333335,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 84.40933333469567,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 11.246666666636827,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 62.82180000094538,
                        "hasRDI": true,
                        "daily": 96.6489230783775,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 4.80080000006134,
                            "hasRDI": true,
                            "daily": 24.0040000003067,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.4328800000072619,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 42.562160000681416,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 12.614060000161409,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 18.568933333289394,
                        "hasRDI": true,
                        "daily": 6.189644444429798,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 3.765999999990397,
                            "hasRDI": true,
                            "daily": 15.063999999961588,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 3.1927333333187864,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 5.104399999995638,
                        "hasRDI": true,
                        "daily": 10.208799999991276,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1283.7106666664668,
                        "hasRDI": true,
                        "daily": 53.48794444443611,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 43.3699999998945,
                        "hasRDI": true,
                        "daily": 4.33699999998945,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 37.58533333325725,
                        "hasRDI": true,
                        "daily": 8.948888888870774,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 288.43666666538,
                        "hasRDI": true,
                        "daily": 6.136950354582554,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 4.31259999999858,
                        "hasRDI": true,
                        "daily": 23.958888888880995,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.2187733333323392,
                        "hasRDI": true,
                        "daily": 11.079757575748538,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 86.30533333320417,
                        "hasRDI": true,
                        "daily": 12.329333333314883,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 134.95999999774116,
                        "hasRDI": true,
                        "daily": 14.995555555304573,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.2859999999789673,
                        "hasRDI": true,
                        "daily": 1.4288888888655191,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.048859999999796094,
                        "hasRDI": true,
                        "daily": 4.071666666649675,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.09953999999980861,
                        "hasRDI": true,
                        "daily": 7.656923076908355,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.59131999999658,
                        "hasRDI": true,
                        "daily": 3.695749999978625,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.1057599999994644,
                        "hasRDI": true,
                        "daily": 8.135384615343416,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 11.359999999937443,
                        "hasRDI": true,
                        "daily": 2.839999999984361,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 11.359999999937443,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.027200000000000002,
                        "hasRDI": true,
                        "daily": 1.1333333333333335,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 12.66140000020435,
                        "hasRDI": true,
                        "daily": 84.40933333469567,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 13.495999999964193,
                        "hasRDI": true,
                        "daily": 11.246666666636827,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 155.07853333301446,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/8e7a462202c200a0f9e15c662c5f0de3?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a5b72febbf9abffeec8eee5ad040f277",
                    "label": "Potato & turmeric focaccia",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/aa7/aa749e5a2b2e856bd2ea6b5d40870d56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f8cd32d13f800b5ece441fe5ad80a0ccd64397266bb8c4ec82c02efe8b2b62b",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa7/aa749e5a2b2e856bd2ea6b5d40870d56-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c60fe331a636d7271d003adc9b32015fe58b8cbe156b89031c0a0c5734f8ab55",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa7/aa749e5a2b2e856bd2ea6b5d40870d56-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86685ccb0faf59dfe594737f3032a94ca24b5260f473b9f1b6c5cd395d1b2f02",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa7/aa749e5a2b2e856bd2ea6b5d40870d56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f8cd32d13f800b5ece441fe5ad80a0ccd64397266bb8c4ec82c02efe8b2b62b",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "BBC Good Food",
                    "url": "https://www.bbcgoodfood.com/recipes/potato-turmeric-focaccia",
                    "shareAs": "http://www.edamam.com/recipe/potato-turmeric-focaccia-a5b72febbf9abffeec8eee5ad040f277/turmeric",
                    "yield": 12,
                    "dietLabels": [
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "DASH",
                      "Dairy-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "1 tsp fresh yeast , or ½ tsp fast-action dried yeast",
                      "2 tbsp olive oil",
                      "450g organic strong white flour",
                      "3 medium waxy potatoes , thinly sliced",
                      "2 tbsp olive oil , plus extra to serve",
                      "1 tsp turmeric",
                      "1 rosemary sprig, leaves picked and chopped, to serve"
                    ],
                    "ingredients": [
                      {
                        "text": "1 tsp fresh yeast , or ½ tsp fast-action dried yeast",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "yeast",
                        "weight": 4,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                        "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
                      },
                      {
                        "text": "2 tbsp olive oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 27,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                        "text": "450g organic strong white flour",
                        "quantity": 450,
                        "measure": "gram",
                        "food": "flour",
                        "weight": 450,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                      },
                      {
                        "text": "3 medium waxy potatoes , thinly sliced",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "potatoes",
                        "weight": 639,
                        "foodCategory": "vegetables",
                        "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                        "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                      },
                      {
                        "text": "2 tbsp olive oil , plus extra to serve",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 27,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                        "text": "1 tsp turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1 rosemary sprig, leaves picked and chopped, to serve",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "rosemary sprig",
                        "weight": 5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
                        "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
                      }
                    ],
                    "calories": 2636.3,
                    "totalWeight": 1155,
                    "totalTime": 50,
                    "cuisineType": [
                      "italian"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "main course"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2636.3,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 59.68000000000001,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 8.55704,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00168,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.047050000000006,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.884100000000001,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 459.72630000000004,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 28.67,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 6.2955000000000005,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 61.466300000000004,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 52.57,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 166.81,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 258.92,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 3306.2299999999996,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 12.620900000000002,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 5.5022,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 887.98,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 7.300000000000001,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 127.00600000000001,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.4943400000000002,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.55658,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 14.054160000000001,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.16306,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 318.89000000000004,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 318.89000000000004,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0028000000000000004,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.215800000000002,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 46.417,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 564.5998000000001,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 131.815,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 91.81538461538463,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 42.7852,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 153.24210000000002,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 114.68,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 122.93260000000001,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 2.1904166666666667,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 16.681,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 61.647619047619045,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 70.34531914893616,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 70.11611111111112,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 50.02,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 126.85428571428571,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.8111111111111112,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 141.1177777777778,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 124.52833333333336,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 42.81384615384615,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 87.83850000000001,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 166.38923076923078,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 79.72250000000001,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.11666666666666668,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 54.77200000000001,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 38.68083333333333,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 59.68000000000001,
                        "hasRDI": true,
                        "daily": 91.81538461538463,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 8.55704,
                            "hasRDI": true,
                            "daily": 42.7852,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00168,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 40.047050000000006,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 7.884100000000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 459.72630000000004,
                        "hasRDI": true,
                        "daily": 153.24210000000002,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 28.67,
                            "hasRDI": true,
                            "daily": 114.68,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 6.2955000000000005,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 61.466300000000004,
                        "hasRDI": true,
                        "daily": 122.93260000000001,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 52.57,
                        "hasRDI": true,
                        "daily": 2.1904166666666667,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 166.81,
                        "hasRDI": true,
                        "daily": 16.681,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 258.92,
                        "hasRDI": true,
                        "daily": 61.647619047619045,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3306.2299999999996,
                        "hasRDI": true,
                        "daily": 70.34531914893616,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.620900000000002,
                        "hasRDI": true,
                        "daily": 70.11611111111112,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.5022,
                        "hasRDI": true,
                        "daily": 50.02,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 887.98,
                        "hasRDI": true,
                        "daily": 126.85428571428571,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 7.300000000000001,
                        "hasRDI": true,
                        "daily": 0.8111111111111112,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 127.00600000000001,
                        "hasRDI": true,
                        "daily": 141.1177777777778,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.4943400000000002,
                        "hasRDI": true,
                        "daily": 124.52833333333336,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.55658,
                        "hasRDI": true,
                        "daily": 42.81384615384615,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 14.054160000000001,
                        "hasRDI": true,
                        "daily": 87.83850000000001,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.16306,
                        "hasRDI": true,
                        "daily": 166.38923076923078,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 318.89000000000004,
                        "hasRDI": true,
                        "daily": 79.72250000000001,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 318.89000000000004,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0028000000000000004,
                        "hasRDI": true,
                        "daily": 0.11666666666666668,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.215800000000002,
                        "hasRDI": true,
                        "daily": 54.77200000000001,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 46.417,
                        "hasRDI": true,
                        "daily": 38.68083333333333,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 564.5998000000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/a5b72febbf9abffeec8eee5ad040f277?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_435885585ae700c2c39e1fa7e63c2e8e",
                    "label": "Turmeric-Lime Crema",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/390/390e8206eb050a9b9e93a4cd25b68795.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d641a93776cb712ec4651e1de0cc31526a49d849429613b17a638b6a362e74a",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/390/390e8206eb050a9b9e93a4cd25b68795-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=eb48e47cc2b1d58b2893082b12b7b09db9d1d5dc5769dfca8e578afe5a8f360c",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/390/390e8206eb050a9b9e93a4cd25b68795-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d862471966e7f5f5950bdcefc923bcc692b99ddb211d80ec1a629c857d90bd3",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/390/390e8206eb050a9b9e93a4cd25b68795.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d641a93776cb712ec4651e1de0cc31526a49d849429613b17a638b6a362e74a",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "PBS Food",
                    "url": "http://www.pbs.org/food/recipes/turmeric-lime-crema/",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-lime-crema-435885585ae700c2c39e1fa7e63c2e8e/turmeric",
                    "yield": 2,
                    "dietLabels": [
                      "Low-Carb"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Low Potassium",
                      "Kidney-Friendly",
                      "Keto-Friendly",
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "½ cup sour cream or greek yogurt",
                      "1 tsp turmeric",
                      "½ tsp smoked paprika",
                      "Juice of half of a lime",
                      "Salt to taste"
                    ],
                    "ingredients": [
                      {
                        "text": "½ cup sour cream or greek yogurt",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 115,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                      },
                      {
                        "text": "1 tsp turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "½ tsp smoked paprika",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "smoked paprika",
                        "weight": 1.15,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                        "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                      },
                      {
                        "text": "Juice of half of a lime",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "lime",
                        "weight": 33.5,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                      },
                      {
                        "text": "Salt to taste",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 0.9159,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      }
                    ],
                    "calories": 244.603,
                    "totalWeight": 153.42060870529954,
                    "totalTime": 4,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "condiments and sauces"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 244.603,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 23.002235000000002,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 13.32017,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00168,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 5.8675275,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 1.096414,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 9.477985,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.0203499999999996,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 4.0933600000000006,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 3.06801,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 59.800000000000004,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 354.984522,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 145.41344608927193,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 21.804706087053,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 285.00164869642396,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 2.292153008727489,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.6594156087052997,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 150.86100000000002,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 231.39450000000002,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 10.814850000000002,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.056984999999999994,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.223145,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.34854,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.10778650000000002,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 11.8935,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 11.8935,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.32200000000000006,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.4600000000000001,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.0472500000000002,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.5964500000000004,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 115.7124012174106,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 12.23015,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 35.388053846153845,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 66.60085,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 3.1593283333333333,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.081399999999999,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 6.136019999999999,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 19.933333333333334,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 14.79102175,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 14.541344608927194,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 5.191596687393572,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 6.06386486588136,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 12.734183381819383,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 5.994687351866361,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 21.55157142857143,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 25.7105,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 12.0165,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 4.748749999999999,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 17.165000000000003,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 2.178375,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 8.291269230769233,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2.973375,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 13.416666666666668,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.0666666666666673,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.981666666666668,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.997041666666667,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 23.002235000000002,
                        "hasRDI": true,
                        "daily": 35.388053846153845,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 13.32017,
                            "hasRDI": true,
                            "daily": 66.60085,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00168,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 5.8675275,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 1.096414,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 9.477985,
                        "hasRDI": true,
                        "daily": 3.1593283333333333,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 2.0203499999999996,
                            "hasRDI": true,
                            "daily": 8.081399999999999,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 4.0933600000000006,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 3.06801,
                        "hasRDI": true,
                        "daily": 6.136019999999999,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 59.800000000000004,
                        "hasRDI": true,
                        "daily": 19.933333333333334,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 354.984522,
                        "hasRDI": true,
                        "daily": 14.79102175,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 145.41344608927193,
                        "hasRDI": true,
                        "daily": 14.541344608927194,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 21.804706087053,
                        "hasRDI": true,
                        "daily": 5.191596687393572,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 285.00164869642396,
                        "hasRDI": true,
                        "daily": 6.06386486588136,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.292153008727489,
                        "hasRDI": true,
                        "daily": 12.734183381819383,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.6594156087052997,
                        "hasRDI": true,
                        "daily": 5.994687351866361,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 150.86100000000002,
                        "hasRDI": true,
                        "daily": 21.55157142857143,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 231.39450000000002,
                        "hasRDI": true,
                        "daily": 25.7105,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 10.814850000000002,
                        "hasRDI": true,
                        "daily": 12.0165,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.056984999999999994,
                        "hasRDI": true,
                        "daily": 4.748749999999999,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.223145,
                        "hasRDI": true,
                        "daily": 17.165000000000003,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.34854,
                        "hasRDI": true,
                        "daily": 2.178375,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.10778650000000002,
                        "hasRDI": true,
                        "daily": 8.291269230769233,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 11.8935,
                        "hasRDI": true,
                        "daily": 2.973375,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 11.8935,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.32200000000000006,
                        "hasRDI": true,
                        "daily": 13.416666666666668,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.4600000000000001,
                        "hasRDI": true,
                        "daily": 3.0666666666666673,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.0472500000000002,
                        "hasRDI": true,
                        "daily": 6.981666666666668,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 3.5964500000000004,
                        "hasRDI": true,
                        "daily": 2.997041666666667,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 115.7124012174106,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/435885585ae700c2c39e1fa7e63c2e8e?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f5ad806c60b471ecec8aab43ce20773f",
                    "label": "The Secret Ingredient (Turmeric): Moroccan Lamb Tagine with Turmeric, Onions, and Olives",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/aa2/aa2c58579f917f536d6fdbcd4e95aab2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74cf2e49d3ea03634c0033d06e5bf47cbeed779b0e434a9c99c726f4fd1404e9",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa2/aa2c58579f917f536d6fdbcd4e95aab2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a519b7994b4b865e76def6d9443b40b88ee3abef304e628a31d47647a218e07f",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa2/aa2c58579f917f536d6fdbcd4e95aab2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=229d056378542d334e51d690189760d551653c06273f599a68cda019c1cd689d",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aa2/aa2c58579f917f536d6fdbcd4e95aab2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74cf2e49d3ea03634c0033d06e5bf47cbeed779b0e434a9c99c726f4fd1404e9",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Serious Eats",
                    "url": "http://www.seriouseats.com/recipes/2011/11/the-secret-ingredient-turmeric-moroccan-lamb.html",
                    "shareAs": "http://www.edamam.com/recipe/the-secret-ingredient-turmeric-moroccan-lamb-tagine-with-turmeric-onions-and-olives-f5ad806c60b471ecec8aab43ce20773f/turmeric",
                    "yield": 4,
                    "dietLabels": [],
                    "healthLabels": [
                      "Mediterranean",
                      "Dairy-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "2 tablespoons olive oil",
                      "4 lamb shanks",
                      "Kosher salt",
                      "Freshly cracked black pepper",
                      "3 medium yellow onions, thinly sliced in halfmoons",
                      "3 garlic cloves, whole but peeled and smashed",
                      "1 teaspoon turmeric",
                      "1/2 teaspoon cumin",
                      "1 cinnamon stick",
                      "1/3 cup dry white wine",
                      "1 1/2 cups vegetable broth",
                      "1/2 cup medium-sized green olives, pits in",
                      "Cilantro",
                      "Mint",
                      "Cooked couscous, for serving"
                    ],
                    "ingredients": [
                      {
                        "text": "2 tablespoons olive oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 27,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                        "text": "4 lamb shanks",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "lamb shanks",
                        "weight": 1812,
                        "foodCategory": "meats",
                        "foodId": "food_ai1zuazbhdt1cgbp57he3b0emm7d",
                        "image": null
                      },
                      {
                        "text": "Kosher salt",
                        "quantity": 0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 17.5653,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                        "text": "Freshly cracked black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 8.78265,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                        "text": "3 medium yellow onions, thinly sliced in halfmoons",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "yellow onions",
                        "weight": 330,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                        "text": "3 garlic cloves, whole but peeled and smashed",
                        "quantity": 3,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 9,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                        "text": "1 teaspoon turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1/2 teaspoon cumin",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "cumin",
                        "weight": 1.05,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                        "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
                      },
                      {
                        "text": "1 cinnamon stick",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "cinnamon stick",
                        "weight": 2.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                      },
                      {
                        "text": "1/3 cup dry white wine",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "dry white wine",
                        "weight": 78.39999999999999,
                        "foodCategory": "wines",
                        "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                        "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                      },
                      {
                        "text": "1 1/2 cups vegetable broth",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "vegetable broth",
                        "weight": 340.5,
                        "foodCategory": "Vegan products",
                        "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
                        "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
                      },
                      {
                        "text": "1/2 cup medium-sized green olives, pits in",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "green olives",
                        "weight": 60,
                        "foodCategory": "canned fruit",
                        "foodId": "food_au01k5obo9mz1pa1febfibire8z8",
                        "image": "https://www.edamam.com/food-img/95c/95c706937e42a80661f12c094d551d95.jpg"
                      },
                      {
                        "text": "Cilantro",
                        "quantity": 0,
                        "measure": null,
                        "food": "Cilantro",
                        "weight": 29.2755,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                      },
                      {
                        "text": "Mint",
                        "quantity": 0,
                        "measure": null,
                        "food": "Mint",
                        "weight": 0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                      },
                      {
                        "text": "Cooked couscous, for serving",
                        "quantity": 1,
                        "measure": "serving",
                        "food": "Cooked couscous",
                        "weight": 264,
                        "foodCategory": "grains",
                        "foodId": "food_bhgmmawa1dtqp8anm795pb2n199z",
                        "image": "https://www.edamam.com/food-img/0ba/0ba047475ceba632ce566f8997c6f0a5.jpg"
                      }
                    ],
                    "calories": 4524.95542540392,
                    "totalWeight": 2977.21739060341,
                    "totalTime": 245,
                    "cuisineType": [
                      "asian"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "main course"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4524.95542540392,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 282.177382793255,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 121.16269958928,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00168,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 127.53377653464,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 14.376980309755002,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 111.21737146268501,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.83242611152,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 16.091992045295,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 353.95222591094506,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1195.92,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 6896.462440662003,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 430.3459592456634,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 472.0320548784492,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 6585.534784737748,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 33.37297706385125,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 75.22524797957342,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 3419.579061731961,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 125.91066118341001,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 36.27617804359001,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.9668048269999994,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.555335168719998,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 95.55835081629,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 7.439216510925001,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 127.57404164531502,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 127.57404164531502,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 49.83020804550001,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.00124623,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.668224659610001,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 130.76930952481,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 2197.951334001757,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 226.247771270196,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 434.1190504511615,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 605.8134979464,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 37.07245715422834,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 67.32970444608,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 707.9044518218901,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 398.64,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 287.35260169425015,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 43.03459592456634,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 112.38858449486885,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 140.1177613773989,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 185.40542813250696,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 683.8658907233947,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 488.5112945331373,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 13.990073464823334,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 40.306864492877786,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 247.23373558333327,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 427.33347451692293,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 597.2396926018125,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 572.2474239173077,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 31.89351041132876,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2076.2586685625006,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0083082,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 51.12149773073334,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 108.97442460400835,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 282.177382793255,
                        "hasRDI": true,
                        "daily": 434.1190504511615,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 121.16269958928,
                            "hasRDI": true,
                            "daily": 605.8134979464,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00168,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 127.53377653464,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 14.376980309755002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 111.21737146268501,
                        "hasRDI": true,
                        "daily": 37.07245715422834,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 16.83242611152,
                            "hasRDI": true,
                            "daily": 67.32970444608,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 16.091992045295,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 353.95222591094506,
                        "hasRDI": true,
                        "daily": 707.9044518218901,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1195.92,
                        "hasRDI": true,
                        "daily": 398.64,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 6896.462440662003,
                        "hasRDI": true,
                        "daily": 287.35260169425015,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 430.3459592456634,
                        "hasRDI": true,
                        "daily": 43.03459592456634,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 472.0320548784492,
                        "hasRDI": true,
                        "daily": 112.38858449486885,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 6585.534784737748,
                        "hasRDI": true,
                        "daily": 140.1177613773989,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 33.37297706385125,
                        "hasRDI": true,
                        "daily": 185.40542813250696,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 75.22524797957342,
                        "hasRDI": true,
                        "daily": 683.8658907233947,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3419.579061731961,
                        "hasRDI": true,
                        "daily": 488.5112945331373,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 125.91066118341001,
                        "hasRDI": true,
                        "daily": 13.990073464823334,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 36.27617804359001,
                        "hasRDI": true,
                        "daily": 40.306864492877786,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.9668048269999994,
                        "hasRDI": true,
                        "daily": 247.23373558333327,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 5.555335168719998,
                        "hasRDI": true,
                        "daily": 427.33347451692293,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 95.55835081629,
                        "hasRDI": true,
                        "daily": 597.2396926018125,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 7.439216510925001,
                        "hasRDI": true,
                        "daily": 572.2474239173077,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 127.57404164531502,
                        "hasRDI": true,
                        "daily": 31.89351041132876,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 127.57404164531502,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 49.83020804550001,
                        "hasRDI": true,
                        "daily": 2076.2586685625006,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.00124623,
                        "hasRDI": true,
                        "daily": 0.0083082,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.668224659610001,
                        "hasRDI": true,
                        "daily": 51.12149773073334,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 130.76930952481,
                        "hasRDI": true,
                        "daily": 108.97442460400835,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2197.951334001757,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/f5ad806c60b471ecec8aab43ce20773f?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ae705920384abbd1e4937eab81cbebd1",
                    "label": "Turmeric And Flax Dog Biscuits",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/385/385990dac42c2840b0774a5a953a5ed4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=94e61d62c17d6fd7bfba1f364033c6df55ed6452e364c40b77649f3b7e8f7925",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/385/385990dac42c2840b0774a5a953a5ed4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84b93b71fd1b3b35b4efb58b5eb94665472383d3af3e1702b95187926f0ecd02",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/385/385990dac42c2840b0774a5a953a5ed4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=920eabfab9aeb0405764f4b5ff7f3e417f6c5b942516b3964ce0ffa70f5e2c3b",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/385/385990dac42c2840b0774a5a953a5ed4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=94e61d62c17d6fd7bfba1f364033c6df55ed6452e364c40b77649f3b7e8f7925",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/385/385990dac42c2840b0774a5a953a5ed4-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2522394e8163805eb43e2208994668010c9a17c33c2f63dca24da1f2a28c9539",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "White On Rice Couple",
                    "url": "http://whiteonricecouple.com/recipes/best-dog-biscuits-recipe/",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-and-flax-dog-biscuits-ae705920384abbd1e4937eab81cbebd1/turmeric",
                    "yield": 10,
                    "dietLabels": [
                      "Balanced",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Kidney-Friendly",
                      "Dairy-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Kosher"
                    ],
                    "cautions": [
                      "Gluten",
                      "Wheat",
                      "Soy",
                      "Sulfites",
                      "FODMAP"
                    ],
                    "ingredientLines": [
                      "3/4 cup (180ml) hot Water",
                      "1 teaspoon Beef or Chicken Bouillon Powder",
                      "1 1/3 cup (175g) all-purpose Flour",
                      "1 1/3 cup (175g) Whole Wheat Flour",
                      "2 Tablespoons Brown Sugar",
                      "1/2 cup (55g) ground Flax Seed",
                      "1 Tablespoon Turmeric",
                      "1/2 cup (130g) Peanut Butter",
                      "1 Egg"
                    ],
                    "ingredients": [
                      {
                        "text": "3/4 cup (180ml) hot Water",
                        "quantity": 180,
                        "measure": "milliliter",
                        "food": "Water",
                        "weight": 180,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      },
                      {
                        "text": "1 teaspoon Beef or Chicken Bouillon Powder",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "Chicken Bouillon",
                        "weight": 2,
                        "foodCategory": "canned soup",
                        "foodId": "food_a9ggmiabw9zri9bjikrxiaxewk0b",
                        "image": null
                      },
                      {
                        "text": "1 1/3 cup (175g) all-purpose Flour",
                        "quantity": 175,
                        "measure": "gram",
                        "food": "all-purpose Flour",
                        "weight": 175,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                      },
                      {
                        "text": "1 1/3 cup (175g) Whole Wheat Flour",
                        "quantity": 175,
                        "measure": "gram",
                        "food": "Whole Wheat Flour",
                        "weight": 175,
                        "foodCategory": "grains",
                        "foodId": "food_azuyr92bee8mu1aodnko9agg46su",
                        "image": "https://www.edamam.com/food-img/f46/f46a64137365c10237522be5980f769c.jpg"
                      },
                      {
                        "text": "2 Tablespoons Brown Sugar",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "Brown Sugar",
                        "weight": 18.12499999969356,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                      },
                      {
                        "text": "1/2 cup (55g) ground Flax Seed",
                        "quantity": 55,
                        "measure": "gram",
                        "food": "ground Flax Seed",
                        "weight": 55,
                        "foodCategory": "grains",
                        "foodId": "food_auaq2zsa87h332b65eo4ib7dz1qx",
                        "image": null
                      },
                      {
                        "text": "1 Tablespoon Turmeric",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "Turmeric",
                        "weight": 9.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1/2 cup (130g) Peanut Butter",
                        "quantity": 130,
                        "measure": "gram",
                        "food": "Peanut Butter",
                        "weight": 130,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bz6b8fsbccyn3zaij72f7av8dl9m",
                        "image": "https://www.edamam.com/food-img/d74/d740276ae1409472a8714b2cee88a310.jpg"
                      },
                      {
                        "text": "1 Egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "Egg",
                        "weight": 43,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                      }
                    ],
                    "calories": 2427.1529999988356,
                    "totalWeight": 787.5249999996936,
                    "totalTime": 0,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "biscuits and cookies"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2427.1529999988356,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 96.3768,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 18.077202,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.11910400000000002,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.42434600000001,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 34.835694000000004,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 330.4125724996994,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 49.1338,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 32.872714999702694,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 17.58487499970269,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 89.34246999999964,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 160.21999999999997,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 584.9729999999142,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 296.2857499997457,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 525.9132499999724,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1834.3462499995921,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 25.740587499997826,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 10.043137499999908,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 1367.0409999999877,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 68.8,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.08580000000000002,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.473702,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.6210600000000004,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 36.30943749999966,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.4551392499998745,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 722.261249999997,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 263.7612499999969,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 269.5,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.38870000000000005,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8599999999999999,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 14.344719999999999,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.628599999999999,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 255.3192749999959,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 121.35764999994178,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 148.272,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 90.38601,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 110.13752416656648,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 196.5352,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 178.68493999999927,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 53.40666666666665,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 24.373874999996428,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 29.628574999974568,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 125.21744047618392,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 39.0286436170126,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 143.00326388887683,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 91.30124999999917,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 195.29157142856965,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 7.644444444444445,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.09533333333333335,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 206.14183333333332,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 124.69692307692311,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 226.93398437499786,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 111.93378846152882,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 180.56531249999924,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 16.195833333333336,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.7333333333333325,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 95.63146666666667,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.690499999999999,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 96.3768,
                        "hasRDI": true,
                        "daily": 148.272,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 18.077202,
                            "hasRDI": true,
                            "daily": 90.38601,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.11910400000000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 40.42434600000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 34.835694000000004,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 330.4125724996994,
                        "hasRDI": true,
                        "daily": 110.13752416656648,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 49.1338,
                            "hasRDI": true,
                            "daily": 196.5352,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 32.872714999702694,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 17.58487499970269,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 89.34246999999964,
                        "hasRDI": true,
                        "daily": 178.68493999999927,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 160.21999999999997,
                        "hasRDI": true,
                        "daily": 53.40666666666665,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 584.9729999999142,
                        "hasRDI": true,
                        "daily": 24.373874999996428,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 296.2857499997457,
                        "hasRDI": true,
                        "daily": 29.628574999974568,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 525.9132499999724,
                        "hasRDI": true,
                        "daily": 125.21744047618392,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1834.3462499995921,
                        "hasRDI": true,
                        "daily": 39.0286436170126,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 25.740587499997826,
                        "hasRDI": true,
                        "daily": 143.00326388887683,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.043137499999908,
                        "hasRDI": true,
                        "daily": 91.30124999999917,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1367.0409999999877,
                        "hasRDI": true,
                        "daily": 195.29157142856965,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 68.8,
                        "hasRDI": true,
                        "daily": 7.644444444444445,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.08580000000000002,
                        "hasRDI": true,
                        "daily": 0.09533333333333335,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.473702,
                        "hasRDI": true,
                        "daily": 206.14183333333332,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.6210600000000004,
                        "hasRDI": true,
                        "daily": 124.69692307692311,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 36.30943749999966,
                        "hasRDI": true,
                        "daily": 226.93398437499786,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.4551392499998745,
                        "hasRDI": true,
                        "daily": 111.93378846152882,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 722.261249999997,
                        "hasRDI": true,
                        "daily": 180.56531249999924,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 263.7612499999969,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 269.5,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.38870000000000005,
                        "hasRDI": true,
                        "daily": 16.195833333333336,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8599999999999999,
                        "hasRDI": true,
                        "daily": 5.7333333333333325,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 14.344719999999999,
                        "hasRDI": true,
                        "daily": 95.63146666666667,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 5.628599999999999,
                        "hasRDI": true,
                        "daily": 4.690499999999999,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 255.3192749999959,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/ae705920384abbd1e4937eab81cbebd1?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_97689b8b252aa443d6810618593935a8",
                    "label": "TURMERIC SMOOTHIE recipes",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fc2/fc2e050dfa652f1ee35b3c67b8c9318d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0127d5ff8a834a6bab5961aff6bbb2464967365bfe83165ee343fb313e1da803",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc2/fc2e050dfa652f1ee35b3c67b8c9318d-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=63c142f7df7bd832be223d41ae7cf9104608a2274415a1c769c7cbab84b5caf6",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc2/fc2e050dfa652f1ee35b3c67b8c9318d-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=736806d8f6ab67538681559cadcd7ab74a5e97e603420b246a0b49023d0f26a5",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc2/fc2e050dfa652f1ee35b3c67b8c9318d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0127d5ff8a834a6bab5961aff6bbb2464967365bfe83165ee343fb313e1da803",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "This Rawsome Vegan Life",
                    "url": "http://www.thisrawsomeveganlife.com/2016/02/turmeric-smoothie-delicious-different.html",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-smoothie-recipes-97689b8b252aa443d6810618593935a8/turmeric",
                    "yield": 4,
                    "dietLabels": [
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Kosher"
                    ],
                    "cautions": [
                      "Tree-Nuts",
                      "Sulfites",
                      "FODMAP"
                    ],
                    "ingredientLines": [
                      "1 roughly chopped red bell pepper",
                      "1 cup frozen strawberries",
                      "1/4 teaspoon turmeric powder",
                      "1/8 teaspoon ground black pepper",
                      "1/2 cup coconut milk",
                      "1 teaspoon maple syrup (or whatever sweetener you like)",
                      "1 cup fresh orange juice"
                    ],
                    "ingredients": [
                      {
                        "text": "1 roughly chopped red bell pepper",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "red bell pepper",
                        "weight": 119,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                        "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                      },
                      {
                        "text": "1 cup frozen strawberries",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "frozen strawberries",
                        "weight": 149,
                        "foodCategory": "fruit",
                        "foodId": "food_auuu2f6btnbwd8b5vkk3gbzrsr7s",
                        "image": "https://www.edamam.com/food-img/cc2/cc26ebaab395eaf79ca6b20479a37c3a.jpg"
                      },
                      {
                        "text": "1/4 teaspoon turmeric powder",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 0.75,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1/8 teaspoon ground black pepper",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.2875,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                        "text": "1/2 cup coconut milk",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "coconut milk",
                        "weight": 113,
                        "foodCategory": "non-dairy beverages",
                        "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
                        "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
                      },
                      {
                        "text": "1 teaspoon maple syrup (or whatever sweetener you like)",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "maple syrup",
                        "weight": 6.56250000033286,
                        "foodCategory": "sugars",
                        "foodId": "food_bo37p69bopqshvaul0bn4bv0kqni",
                        "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
                      },
                      {
                        "text": "1 cup fresh orange juice",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "fresh orange juice",
                        "weight": 248,
                        "foodCategory": "100% juice",
                        "foodId": "food_bn7zicravp7kdrb8h9knhadt6kei",
                        "image": "https://www.edamam.com/food-img/011/011c0c3b0f3865bde575f57c556439e4.jpg"
                      }
                    ],
                    "calories": 443.37412500086543,
                    "totalWeight": 636.6000000003329,
                    "totalTime": 10,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "breakfast"
                    ],
                    "dishType": [
                      "drinks"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 443.37412500086543,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 25.1574850000002,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 21.492786375000023,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00042,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 1.1463240000000368,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.5359048750000566,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 54.833606250223156,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.3669875000000005,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 36.61800250020125,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 3.9676875002012473,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 5.942496250000134,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 25.957500000039946,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 89.01737500033953,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 113.35975000006991,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1249.5433750007057,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 6.3018350000003664,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 1.3816400000048934,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 203.77800000000667,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 214.687625,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 338.48625,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.35017675000021964,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3156662500042273,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.58392675000027,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5206203750000066,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 170.488875,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 170.488875,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.447715,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.9281375,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 547.3813912501078,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 22.16870625004327,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 38.703823076923385,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 107.46393187500011,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 18.277868750074386,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 25.467950000000002,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 11.884992500000267,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1.0815625000016644,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 8.901737500033953,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 26.990416666683313,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 26.586029255334164,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 35.01019444444648,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 12.560363636408123,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 29.11114285714381,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 23.854180555555555,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 376.09583333333336,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 29.18139583335164,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 24.28201923109441,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.399542187501687,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 40.04772115384666,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 42.62221875,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 16.3181,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.273447916666667,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 25.1574850000002,
                        "hasRDI": true,
                        "daily": 38.703823076923385,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 21.492786375000023,
                            "hasRDI": true,
                            "daily": 107.46393187500011,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00042,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 1.1463240000000368,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.5359048750000566,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 54.833606250223156,
                        "hasRDI": true,
                        "daily": 18.277868750074386,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 6.3669875000000005,
                            "hasRDI": true,
                            "daily": 25.467950000000002,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 36.61800250020125,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 3.9676875002012473,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 5.942496250000134,
                        "hasRDI": true,
                        "daily": 11.884992500000267,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 25.957500000039946,
                        "hasRDI": true,
                        "daily": 1.0815625000016644,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 89.01737500033953,
                        "hasRDI": true,
                        "daily": 8.901737500033953,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 113.35975000006991,
                        "hasRDI": true,
                        "daily": 26.990416666683313,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1249.5433750007057,
                        "hasRDI": true,
                        "daily": 26.586029255334164,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.3018350000003664,
                        "hasRDI": true,
                        "daily": 35.01019444444648,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.3816400000048934,
                        "hasRDI": true,
                        "daily": 12.560363636408123,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 203.77800000000667,
                        "hasRDI": true,
                        "daily": 29.11114285714381,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 214.687625,
                        "hasRDI": true,
                        "daily": 23.854180555555555,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 338.48625,
                        "hasRDI": true,
                        "daily": 376.09583333333336,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.35017675000021964,
                        "hasRDI": true,
                        "daily": 29.18139583335164,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.3156662500042273,
                        "hasRDI": true,
                        "daily": 24.28201923109441,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.58392675000027,
                        "hasRDI": true,
                        "daily": 22.399542187501687,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.5206203750000066,
                        "hasRDI": true,
                        "daily": 40.04772115384666,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 170.488875,
                        "hasRDI": true,
                        "daily": 42.62221875,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 170.488875,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.447715,
                        "hasRDI": true,
                        "daily": 16.3181,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 9.9281375,
                        "hasRDI": true,
                        "daily": 8.273447916666667,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 547.3813912501078,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/97689b8b252aa443d6810618593935a8?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a99cd1a8feea68403c10a81f54e47f48",
                    "label": "Turmeric-Ginger Cauliflower",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd08b9c3173c0cffb982e5d1fbe7d8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad672e39eda1c79ffcb0e35391a75ee1bfc9373779101dede621a15311f991d8",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd08b9c3173c0cffb982e5d1fbe7d8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0503e9ee1cffb34e7bc86daa51241477d9d53a70c0ac4670c28e12554bea8997",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd08b9c3173c0cffb982e5d1fbe7d8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13a5829a61560981763b1ca6ab30ac2d1421ae0669b5da9c5a8a65f560ac54f5",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd08b9c3173c0cffb982e5d1fbe7d8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad672e39eda1c79ffcb0e35391a75ee1bfc9373779101dede621a15311f991d8",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd08b9c3173c0cffb982e5d1fbe7d8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6be4792b423fd682c573253fa56e25da3d214caa05edaec101dbca51d5a0270a",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "Food & Wine",
                    "url": "http://www.foodandwine.com/recipes/turmeric-ginger-cauliflower",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-ginger-cauliflower-a99cd1a8feea68403c10a81f54e47f48/turmeric",
                    "yield": 4,
                    "dietLabels": [
                      "High-Fiber"
                    ],
                    "healthLabels": [
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "2 tablespoons vegetable oil",
                      "1 medium tomato, seeded and finely chopped",
                      "1 tablespoon black mustard seeds",
                      "1/2 jalapeño, seeded and minced",
                      "1 teaspoon minced peeled fresh ginger",
                      "1/2 teaspoon turmeric",
                      "1 head cauliflower (2 1/4 pounds), cut into 1-inch florets",
                      "Salt"
                    ],
                    "ingredients": [
                      {
                        "text": "2 tablespoons vegetable oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                      },
                      {
                        "text": "1 medium tomato, seeded and finely chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "tomato",
                        "weight": 123,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                      },
                      {
                        "text": "1 tablespoon black mustard seeds",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "mustard seeds",
                        "weight": 6.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
                        "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
                      },
                      {
                        "text": "1/2 jalapeño, seeded and minced",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "jalapeño",
                        "weight": 7,
                        "foodCategory": "vegetables",
                        "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                        "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
                      },
                      {
                        "text": "1 teaspoon minced peeled fresh ginger",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "fresh ginger",
                        "weight": 2,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      },
                      {
                        "text": "1/2 teaspoon turmeric",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1 head cauliflower (2 1/4 pounds), cut into 1-inch florets",
                        "quantity": 2.25,
                        "measure": "pound",
                        "food": "cauliflower",
                        "weight": 1020.5828325,
                        "foodCategory": "vegetables",
                        "foodId": "food_buqfaxubzh6hi5asev8a5aj9sr71",
                        "image": "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg"
                      },
                      {
                        "text": "Salt",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 7.130296995,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      }
                    ],
                    "calories": 565.1197081250001,
                    "totalWeight": 1194.7029255377524,
                    "totalTime": 0,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "starter"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 565.1197081250001,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 33.476401931,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 3.34765468225,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.21560000000000004,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 21.973087163050003,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.863714678075,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 59.09483677525,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 23.232756650000002,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 23.52635210075,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 22.565930384,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 2763.5605093221,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 258.78304547906055,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 195.02062580537753,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 3446.9122766180208,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 6.074134203524584,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 3.4381337407877526,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 537.7254463,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 55.565999999999995,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 517.631725265,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6106864162500001,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.6599926995000001,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 6.328003960775,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.0354184118000003,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 612.798214525,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 612.798214525,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.226326266000003,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 169.7455390375,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 1064.4437140688256,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 28.255985406250005,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 51.502156816923076,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 16.73827341125,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 19.698278925083336,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 92.93102660000001,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 45.131860768,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 115.1483545550875,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 25.87830454790605,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 46.4334823346137,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 73.33855907697917,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 33.745190019581024,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 31.25576127988866,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 76.8179209,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.1739999999999995,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 575.1463614055556,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 50.890534687500015,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 50.7686691923077,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 39.55002475484375,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 156.5706470615385,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 153.19955363125,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 54.84217510666669,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 141.45461586458336,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 33.476401931,
                        "hasRDI": true,
                        "daily": 51.502156816923076,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 3.34765468225,
                            "hasRDI": true,
                            "daily": 16.73827341125,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.21560000000000004,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 21.973087163050003,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 5.863714678075,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 59.09483677525,
                        "hasRDI": true,
                        "daily": 19.698278925083336,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 23.232756650000002,
                            "hasRDI": true,
                            "daily": 92.93102660000001,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 23.52635210075,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 22.565930384,
                        "hasRDI": true,
                        "daily": 45.131860768,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2763.5605093221,
                        "hasRDI": true,
                        "daily": 115.1483545550875,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 258.78304547906055,
                        "hasRDI": true,
                        "daily": 25.87830454790605,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 195.02062580537753,
                        "hasRDI": true,
                        "daily": 46.4334823346137,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3446.9122766180208,
                        "hasRDI": true,
                        "daily": 73.33855907697917,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.074134203524584,
                        "hasRDI": true,
                        "daily": 33.745190019581024,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.4381337407877526,
                        "hasRDI": true,
                        "daily": 31.25576127988866,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 537.7254463,
                        "hasRDI": true,
                        "daily": 76.8179209,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 55.565999999999995,
                        "hasRDI": true,
                        "daily": 6.1739999999999995,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 517.631725265,
                        "hasRDI": true,
                        "daily": 575.1463614055556,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6106864162500001,
                        "hasRDI": true,
                        "daily": 50.890534687500015,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.6599926995000001,
                        "hasRDI": true,
                        "daily": 50.7686691923077,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 6.328003960775,
                        "hasRDI": true,
                        "daily": 39.55002475484375,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.0354184118000003,
                        "hasRDI": true,
                        "daily": 156.5706470615385,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 612.798214525,
                        "hasRDI": true,
                        "daily": 153.19955363125,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 612.798214525,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.226326266000003,
                        "hasRDI": true,
                        "daily": 54.84217510666669,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 169.7455390375,
                        "hasRDI": true,
                        "daily": 141.45461586458336,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1064.4437140688256,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/a99cd1a8feea68403c10a81f54e47f48?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_20f5e72150cea13a58f59b6788052cf3",
                    "label": "Turmeric Root Milk",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bf6/bf638cc8f88a7525d681d912229fa3ac.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ba34d9d1930f894c647a0e78107a0692a98af45b2ad5b5cb1da2f02591c2e1b",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf6/bf638cc8f88a7525d681d912229fa3ac-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1309e45a7dbe6f64c3a68d9a9329ba5adcd4b76ce5387a0e42f542b12ec443d",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf6/bf638cc8f88a7525d681d912229fa3ac-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8134ac0735d5efb75ca89953f64db77ce9e16646c1e6dab23aef2d942fabef3",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf6/bf638cc8f88a7525d681d912229fa3ac.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ba34d9d1930f894c647a0e78107a0692a98af45b2ad5b5cb1da2f02591c2e1b",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf6/bf638cc8f88a7525d681d912229fa3ac-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52b784485fa67b471c3c85d0d20cab7eed1288c6370ca11d2ddb67afff5fef31",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "Elana's Pantry",
                    "url": "http://elanaspantry.com/turmeric-root-milk/",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-root-milk-20f5e72150cea13a58f59b6788052cf3/turmeric",
                    "yield": 4,
                    "dietLabels": [
                      "High-Fiber",
                      "Low-Carb",
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Paleo",
                      "Mediterranean",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "FODMAP-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "1 cup almonds",
                      "2 cups water",
                      "¼ cup turmeric root, sliced",
                      "1 tablespoon ginger, sliced"
                    ],
                    "ingredients": [
                      {
                        "text": "1 cup almonds",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 143,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                      },
                      {
                        "text": "2 cups water",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "water",
                        "weight": 474,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      },
                      {
                        "text": "¼ cup turmeric root, sliced",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "turmeric",
                        "weight": 37.6000000006357,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1 tablespoon ginger, sliced",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "ginger",
                        "weight": 5.99999999989856,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      }
                    ],
                    "calories": 950.0820000019022,
                    "totalWeight": 660.6000000005342,
                    "totalTime": 0,
                    "cuisineType": [
                      "chinese"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "condiments and sauces"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 950.0820000019022,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 72.6669000000199,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 6.140128000011479,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.042506000000355995,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 45.29599400000269,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.923966000004647,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 57.12734000040879,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 26.530200000142276,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 7.52946000001868,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 33.99338000005969,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 31.322000000158454,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 463.01800000105175,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 471.6280000012786,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1855.1700000128017,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 26.021300000349026,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 6.221400000028261,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 802.2940000018662,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.5631999999993779,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3164580000003433,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.6857800000009187,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.726340000007822,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.24574200000051788,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 71.10000000011597,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 71.10000000011597,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 38.3321800000279,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.0444000000850835,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 489.39730000000174,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 47.50410000009511,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 111.79523076926138,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 30.700640000057394,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 19.04244666680293,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 106.1208000005691,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 67.98676000011938,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1.3050833333399356,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 46.301800000105175,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 112.29238095268539,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 39.47170212793195,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 144.5627777797168,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 56.55818181843874,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 114.61342857169515,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.6257777777770865,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 26.37150000002861,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 129.67538461545527,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 35.789625000048886,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 18.903230769270607,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 17.775000000028992,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 255.54786666685266,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.20366666673757,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 72.6669000000199,
                        "hasRDI": true,
                        "daily": 111.79523076926138,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 6.140128000011479,
                            "hasRDI": true,
                            "daily": 30.700640000057394,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.042506000000355995,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 45.29599400000269,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 17.923966000004647,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 57.12734000040879,
                        "hasRDI": true,
                        "daily": 19.04244666680293,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 26.530200000142276,
                            "hasRDI": true,
                            "daily": 106.1208000005691,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 7.52946000001868,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 33.99338000005969,
                        "hasRDI": true,
                        "daily": 67.98676000011938,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 31.322000000158454,
                        "hasRDI": true,
                        "daily": 1.3050833333399356,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 463.01800000105175,
                        "hasRDI": true,
                        "daily": 46.301800000105175,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 471.6280000012786,
                        "hasRDI": true,
                        "daily": 112.29238095268539,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1855.1700000128017,
                        "hasRDI": true,
                        "daily": 39.47170212793195,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 26.021300000349026,
                        "hasRDI": true,
                        "daily": 144.5627777797168,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.221400000028261,
                        "hasRDI": true,
                        "daily": 56.55818181843874,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 802.2940000018662,
                        "hasRDI": true,
                        "daily": 114.61342857169515,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.5631999999993779,
                        "hasRDI": true,
                        "daily": 0.6257777777770865,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3164580000003433,
                        "hasRDI": true,
                        "daily": 26.37150000002861,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.6857800000009187,
                        "hasRDI": true,
                        "daily": 129.67538461545527,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.726340000007822,
                        "hasRDI": true,
                        "daily": 35.789625000048886,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.24574200000051788,
                        "hasRDI": true,
                        "daily": 18.903230769270607,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 71.10000000011597,
                        "hasRDI": true,
                        "daily": 17.775000000028992,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 71.10000000011597,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 38.3321800000279,
                        "hasRDI": true,
                        "daily": 255.54786666685266,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 5.0444000000850835,
                        "hasRDI": true,
                        "daily": 4.20366666673757,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 489.39730000000174,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/20f5e72150cea13a58f59b6788052cf3?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_32886461ab9a02ef76b8acaea07b0083",
                    "label": "Mustard Relish with Turmeric",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2e0/2e03e8c11169fd02c83f615b45380c34.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c670c5057acd29698fe964a675bfebdc9a3541e34101719b84f8bb743da6c1d3",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e0/2e03e8c11169fd02c83f615b45380c34-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8d3cd55ff1f6e5f3657e4f12c256b79bbc144901b93eaf51125f0221e820522",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e0/2e03e8c11169fd02c83f615b45380c34-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ba778e1fd2b74c22fef6fb820327af9004e18022d9082980f9071465acdd3eb3",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e0/2e03e8c11169fd02c83f615b45380c34.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c670c5057acd29698fe964a675bfebdc9a3541e34101719b84f8bb743da6c1d3",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Delish",
                    "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a27549/mustard-relish-turmeric-3861/",
                    "shareAs": "http://www.edamam.com/recipe/mustard-relish-with-turmeric-32886461ab9a02ef76b8acaea07b0083/turmeric",
                    "yield": 1,
                    "dietLabels": [
                      "Low-Fat"
                    ],
                    "healthLabels": [
                      "Low Potassium",
                      "Vegan",
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "DASH",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "½ c. Three-Pickle Relish",
                      "1 tbsp. spicy brown mustard",
                      ".13 tsp. turmeric"
                    ],
                    "ingredients": [
                      {
                        "text": "½ c. Three-Pickle Relish",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "Relish",
                        "weight": 122.5,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bdpk447bepyyfma1ali5qbk50zqp",
                        "image": "https://www.edamam.com/food-img/210/210a09427be497df1915356d63d91d8b.jpeg"
                      },
                      {
                        "text": "1 tbsp. spicy brown mustard",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "mustard",
                        "weight": 15.5624999997369,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                        "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
                      },
                      {
                        "text": ".13 tsp. turmeric",
                        "quantity": 0.12999999523162842,
                        "measure": "teaspoon",
                        "food": "turmeric",
                        "weight": 0.38999998569488525,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      }
                    ],
                    "calories": 169.80429995521018,
                    "totalWeight": 138.45249998543179,
                    "totalTime": 0,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "condiments and sauces"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 169.80429995521018,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 1.108212499526296,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.10662194973650894,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0016190249919654568,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 0.5973498499300293,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.272852149889817,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 44.117639740380206,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.058529996742215,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 35.839943999538384,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 1.073039498605425,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1165.390299993233,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 14.134574975801655,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 14.406199970119074,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 62.39199970205371,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 1.530806242127951,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.288649999354586,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 35.12359995694356,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 75.50312499998685,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.274417499899075,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.027771824991237346,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.051903749978358164,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.3786181248053945,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.02968604998450936,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2.39237499712056,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 2.39237499712056,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.7838019993653363,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 102.92513499807943,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 89.11478999794153,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 8.490214997760509,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 1.7049423069635326,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.5331097486825447,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 14.70587991346007,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.23411998696886,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 2.14607899721085,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 48.5579291663847,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 1.4134574975801657,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 3.4300476119331127,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1.3274893553628448,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 8.504479122933061,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 2.624090903223509,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 5.017657136706222,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 8.38923611110965,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.4160194443323055,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.3143187492697788,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.9925961521813966,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 2.3663632800337155,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.2835423065007197,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 0.59809374928014,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.225346662435575,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 85.77094583173286,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 1.108212499526296,
                        "hasRDI": true,
                        "daily": 1.7049423069635326,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.10662194973650894,
                            "hasRDI": true,
                            "daily": 0.5331097486825447,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.0016190249919654568,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.5973498499300293,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.272852149889817,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 44.117639740380206,
                        "hasRDI": true,
                        "daily": 14.70587991346007,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 2.058529996742215,
                            "hasRDI": true,
                            "daily": 8.23411998696886,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 35.839943999538384,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 1.073039498605425,
                        "hasRDI": true,
                        "daily": 2.14607899721085,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1165.390299993233,
                        "hasRDI": true,
                        "daily": 48.5579291663847,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 14.134574975801655,
                        "hasRDI": true,
                        "daily": 1.4134574975801657,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 14.406199970119074,
                        "hasRDI": true,
                        "daily": 3.4300476119331127,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 62.39199970205371,
                        "hasRDI": true,
                        "daily": 1.3274893553628448,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 1.530806242127951,
                        "hasRDI": true,
                        "daily": 8.504479122933061,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.288649999354586,
                        "hasRDI": true,
                        "daily": 2.624090903223509,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 35.12359995694356,
                        "hasRDI": true,
                        "daily": 5.017657136706222,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 75.50312499998685,
                        "hasRDI": true,
                        "daily": 8.38923611110965,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.274417499899075,
                        "hasRDI": true,
                        "daily": 1.4160194443323055,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.027771824991237346,
                        "hasRDI": true,
                        "daily": 2.3143187492697788,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.051903749978358164,
                        "hasRDI": true,
                        "daily": 3.9925961521813966,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.3786181248053945,
                        "hasRDI": true,
                        "daily": 2.3663632800337155,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.02968604998450936,
                        "hasRDI": true,
                        "daily": 2.2835423065007197,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 2.39237499712056,
                        "hasRDI": true,
                        "daily": 0.59809374928014,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 2.39237499712056,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.7838019993653363,
                        "hasRDI": true,
                        "daily": 5.225346662435575,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 102.92513499807943,
                        "hasRDI": true,
                        "daily": 85.77094583173286,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 89.11478999794153,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/32886461ab9a02ef76b8acaea07b0083?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f0550414095b6ae56f719741f2aa5e71",
                    "label": "Spiced turmeric & lemon BBQ chicken",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4de2d7f03f3215794f17a0e8756d372.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ae25f2d95254c825747f4f5c30ba7d35a68ce4190aadf7c8a12803dbd267e7f",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4de2d7f03f3215794f17a0e8756d372-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08fc3e052546dbb41c31968c861d2a997a54d02906d7742c782b4ce8cfbb6350",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4de2d7f03f3215794f17a0e8756d372-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f2d8d144aded4331e7723ebcce2be4060cc1b2cf23cf2f3500f7f2bff5896c6e",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4de2d7f03f3215794f17a0e8756d372.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ae25f2d95254c825747f4f5c30ba7d35a68ce4190aadf7c8a12803dbd267e7f",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Jamie Oliver",
                    "url": "http://www.jamieoliver.com/recipes/chicken-recipes/spiced-turmeric-lemon-bbq-chicken/",
                    "shareAs": "http://www.edamam.com/recipe/spiced-turmeric-lemon-bbq-chicken-f0550414095b6ae56f719741f2aa5e71/turmeric",
                    "yield": 6,
                    "dietLabels": [
                      "Low-Carb"
                    ],
                    "healthLabels": [
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "1.6 kg free-range or organic chicken",
                      "50 g butter",
                      "2 cloves of garlic",
                      "3 cm piece of ginger",
                      "1 teaspoon ground turmeric",
                      "¼ teaspoon ground cinnamon",
                      "1 unwaxed lemon",
                      "½ a bunch of fresh coriander",
                      "olive oil",
                      "2 - 3 tablespoons runny honey",
                      "4 spring onions",
                      "1 fresh green chilli"
                    ],
                    "ingredients": [
                      {
                        "text": "1.6 kg free-range or organic chicken",
                        "quantity": 1.600000023841858,
                        "measure": "kilogram",
                        "food": "chicken",
                        "weight": 1600.000023841858,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                      },
                      {
                        "text": "50 g butter",
                        "quantity": 50,
                        "measure": "gram",
                        "food": "butter",
                        "weight": 50,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                      },
                      {
                        "text": "2 cloves of garlic",
                        "quantity": 2,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 6,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                        "text": "3 cm piece of ginger",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "piece of ginger",
                        "weight": 180,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      },
                      {
                        "text": "1 teaspoon ground turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "¼ teaspoon ground cinnamon",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "ground cinnamon",
                        "weight": 0.65,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                      },
                      {
                        "text": "1 unwaxed lemon",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "lemon",
                        "weight": 58,
                        "foodCategory": "fruit",
                        "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                        "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                      },
                      {
                        "text": "½ a bunch of fresh coriander",
                        "quantity": 0.5,
                        "measure": "bunch",
                        "food": "fresh coriander",
                        "weight": 20,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                      },
                      {
                        "text": "olive oil",
                        "quantity": 0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 28.222040324249267,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                        "text": "2 - 3 tablespoons runny honey",
                        "quantity": 2.5,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 52.5,
                        "foodCategory": null,
                        "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                      },
                      {
                        "text": "4 spring onions",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "spring onions",
                        "weight": 60,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                      },
                      {
                        "text": "1 fresh green chilli",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "green chilli",
                        "weight": 45,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
                        "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
                      }
                    ],
                    "calories": 4430.108387726358,
                    "totalWeight": 2103.3720641661075,
                    "totalTime": 90,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "main course"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4430.108387726358,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 311.704603914833,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 99.0230928555564,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 3.192680023126602,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 131.31704332870746,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 56.63963807341277,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 94.59823500000002,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.276150000000001,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 51.69040500000001,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 43.11300000000001,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 305.21843943458555,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1307.5000178813934,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1176.5694574957856,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 322.42522302584683,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 440.67000476837154,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 4402.683765464354,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 19.804623640392514,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 22.45279531232835,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 2507.6460350475304,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1122.6275097751618,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 193.32520038146976,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.1314830143051147,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.1620165286102297,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 111.36498462148475,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.218337083446502,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 186.6990014305115,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 186.6990014305115,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.045000073909759,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.950000047683716,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.858142858055345,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 238.0114686328259,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 1383.1899857332419,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 221.5054193863179,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 479.54554448435846,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 495.11546427778205,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 31.53274500000001,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 37.104600000000005,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 610.4368788691711,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 435.8333392937978,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 49.02372739565774,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 32.24252230258468,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 104.92142970675512,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 93.67412266945435,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 110.02568689106951,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 204.11632102116684,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 358.2351478639329,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 124.73638997501797,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 214.80577820163307,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 94.2902511920929,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 166.30896373924844,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 696.0311538842797,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 478.33362180357705,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 46.67475035762787,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 210.20833641290662,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 26.333333651224773,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 79.05428572036895,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 198.34289052735494,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 311.704603914833,
                        "hasRDI": true,
                        "daily": 479.54554448435846,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 99.0230928555564,
                            "hasRDI": true,
                            "daily": 495.11546427778205,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 3.192680023126602,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 131.31704332870746,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 56.63963807341277,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 94.59823500000002,
                        "hasRDI": true,
                        "daily": 31.53274500000001,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 9.276150000000001,
                            "hasRDI": true,
                            "daily": 37.104600000000005,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 51.69040500000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 43.11300000000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 305.21843943458555,
                        "hasRDI": true,
                        "daily": 610.4368788691711,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1307.5000178813934,
                        "hasRDI": true,
                        "daily": 435.8333392937978,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1176.5694574957856,
                        "hasRDI": true,
                        "daily": 49.02372739565774,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 322.42522302584683,
                        "hasRDI": true,
                        "daily": 32.24252230258468,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 440.67000476837154,
                        "hasRDI": true,
                        "daily": 104.92142970675512,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4402.683765464354,
                        "hasRDI": true,
                        "daily": 93.67412266945435,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 19.804623640392514,
                        "hasRDI": true,
                        "daily": 110.02568689106951,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 22.45279531232835,
                        "hasRDI": true,
                        "daily": 204.11632102116684,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2507.6460350475304,
                        "hasRDI": true,
                        "daily": 358.2351478639329,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1122.6275097751618,
                        "hasRDI": true,
                        "daily": 124.73638997501797,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 193.32520038146976,
                        "hasRDI": true,
                        "daily": 214.80577820163307,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.1314830143051147,
                        "hasRDI": true,
                        "daily": 94.2902511920929,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.1620165286102297,
                        "hasRDI": true,
                        "daily": 166.30896373924844,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 111.36498462148475,
                        "hasRDI": true,
                        "daily": 696.0311538842797,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.218337083446502,
                        "hasRDI": true,
                        "daily": 478.33362180357705,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 186.6990014305115,
                        "hasRDI": true,
                        "daily": 46.67475035762787,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 186.6990014305115,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.045000073909759,
                        "hasRDI": true,
                        "daily": 210.20833641290662,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.950000047683716,
                        "hasRDI": true,
                        "daily": 26.333333651224773,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.858142858055345,
                        "hasRDI": true,
                        "daily": 79.05428572036895,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 238.0114686328259,
                        "hasRDI": true,
                        "daily": 198.34289052735494,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1383.1899857332419,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/f0550414095b6ae56f719741f2aa5e71?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fe07a74f9fe4187f23e5b870c92c27f2",
                    "label": "Tangerine, Carrot, and Turmeric Smoothie",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e43/e43b95af1b400187a55c1e026471b43b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4d686f98bb8c95db5a58d10e1162f732beccd7ec4f5a8345a7973a1e7f8c34e",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e43/e43b95af1b400187a55c1e026471b43b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=533ec927c7e49fbed7bd01545cf5bd84171bd590b735e8c61cce8f77a9738295",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e43/e43b95af1b400187a55c1e026471b43b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=859eb353ca11402bab88292fd59d96cb059d2b1cb3be18fab3d6eed0528ae91a",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e43/e43b95af1b400187a55c1e026471b43b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4d686f98bb8c95db5a58d10e1162f732beccd7ec4f5a8345a7973a1e7f8c34e",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e43/e43b95af1b400187a55c1e026471b43b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b0f05c1058afb40e64c832eb6351af646e773127b7d390cfa9ba5764ebed3b1",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "Real Simple",
                    "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/tangerine-carrot-turmeric-smoothie",
                    "shareAs": "http://www.edamam.com/recipe/tangerine-carrot-and-turmeric-smoothie-fe07a74f9fe4187f23e5b870c92c27f2/turmeric",
                    "yield": 2,
                    "dietLabels": [
                      "Balanced"
                    ],
                    "healthLabels": [
                      "Vegetarian",
                      "Pescatarian",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Kosher"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "1 cup almond milk",
                      "1/2 cup whole milk Greek yogurt",
                      "2 tangerines, peeled and seeded",
                      "2 small/medium carrots, cut into 2-inch pieces",
                      "1 teaspoon ground turmeric",
                      "2 tablespoons agave syrup",
                      "1 cup crushed ice"
                    ],
                    "ingredients": [
                      {
                        "text": "1 cup almond milk",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "almond milk",
                        "weight": 240,
                        "foodCategory": "Vegan products",
                        "foodId": "food_aa8o4pkbhgkey4btmg1daaclqmww",
                        "image": "https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg"
                      },
                      {
                        "text": "1/2 cup whole milk Greek yogurt",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "whole milk Greek yogurt",
                        "weight": 144,
                        "foodCategory": "yogurt",
                        "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz",
                        "image": "https://www.edamam.com/food-img/689/6891387401f579242e7303ce8ec00e18.jpg"
                      },
                      {
                        "text": "2 tangerines, peeled and seeded",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "tangerines",
                        "weight": 190.2222222222222,
                        "foodCategory": "fruit",
                        "foodId": "food_a24i0asarijf6nbnhkbbrbgy91bw",
                        "image": "https://www.edamam.com/food-img/f82/f82193abe21e23c1562bb5340f74e336.jpg"
                      },
                      {
                        "text": "2 small/medium carrots, cut into 2-inch pieces",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "carrots",
                        "weight": 122,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                        "text": "1 teaspoon ground turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "2 tablespoons agave syrup",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "agave syrup",
                        "weight": 27.49999999953506,
                        "foodCategory": "chocolate",
                        "foodId": "food_anhsjo8ab8fxtobor302faa2w42g",
                        "image": "https://www.edamam.com/food-img/66c/66cadd8c62af92eaecd6e12443ed27c4.jpg"
                      },
                      {
                        "text": "1 cup crushed ice",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "ice",
                        "weight": 237,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      }
                    ],
                    "calories": 406.72777777633644,
                    "totalWeight": 963.7222222217572,
                    "totalTime": 5,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "breakfast"
                    ],
                    "dishType": [
                      "drinks"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 406.72777777633644,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 11.375738888886797,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.765948266666666,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.004992,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 7.111144133333333,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.011307644444444,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 67.59119444408937,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.96799999999907,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 49.464861110794814,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 18.708249999683705,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 14.91854999999958,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 19.152,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 336.97924444442583,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 691.8720222222175,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 63.15166666666202,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 930.4688888888702,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 3.166083333332915,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 0.7554055555555091,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 196.19424444443976,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1085.5755555555181,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 62.68333333325429,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.37013888888832164,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3019149999992328,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 2.3244705555523524,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.4202933333322454,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 72.18075555541607,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 72.18075555541607,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.247148444439888,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 22.69349999989539,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 741.18306666656,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 20.33638888881682,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 17.501136752133533,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.829741333333335,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 22.53039814802979,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 35.87199999999628,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 29.837099999999158,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 6.384,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 14.040801851851077,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 69.18720222222174,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 15.036111111110003,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 19.797210401890855,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 17.58935185184953,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 6.86732323232281,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 28.027749206348535,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 120.61950617283534,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 69.64814814806032,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 30.844907407360136,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 23.224230769171758,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 14.527940972202202,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 32.33025641017272,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 18.045188888854018,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 48.314322962932586,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 18.911249999912823,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 11.375738888886797,
                        "hasRDI": true,
                        "daily": 17.501136752133533,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 5.765948266666666,
                            "hasRDI": true,
                            "daily": 28.829741333333335,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.004992,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 7.111144133333333,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 3.011307644444444,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 67.59119444408937,
                        "hasRDI": true,
                        "daily": 22.53039814802979,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 8.96799999999907,
                            "hasRDI": true,
                            "daily": 35.87199999999628,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 49.464861110794814,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 18.708249999683705,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 14.91854999999958,
                        "hasRDI": true,
                        "daily": 29.837099999999158,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 19.152,
                        "hasRDI": true,
                        "daily": 6.384,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 336.97924444442583,
                        "hasRDI": true,
                        "daily": 14.040801851851077,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 691.8720222222175,
                        "hasRDI": true,
                        "daily": 69.18720222222174,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 63.15166666666202,
                        "hasRDI": true,
                        "daily": 15.036111111110003,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 930.4688888888702,
                        "hasRDI": true,
                        "daily": 19.797210401890855,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.166083333332915,
                        "hasRDI": true,
                        "daily": 17.58935185184953,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.7554055555555091,
                        "hasRDI": true,
                        "daily": 6.86732323232281,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 196.19424444443976,
                        "hasRDI": true,
                        "daily": 28.027749206348535,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1085.5755555555181,
                        "hasRDI": true,
                        "daily": 120.61950617283534,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 62.68333333325429,
                        "hasRDI": true,
                        "daily": 69.64814814806032,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.37013888888832164,
                        "hasRDI": true,
                        "daily": 30.844907407360136,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.3019149999992328,
                        "hasRDI": true,
                        "daily": 23.224230769171758,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 2.3244705555523524,
                        "hasRDI": true,
                        "daily": 14.527940972202202,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.4202933333322454,
                        "hasRDI": true,
                        "daily": 32.33025641017272,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 72.18075555541607,
                        "hasRDI": true,
                        "daily": 18.045188888854018,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 72.18075555541607,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.247148444439888,
                        "hasRDI": true,
                        "daily": 48.314322962932586,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 22.69349999989539,
                        "hasRDI": true,
                        "daily": 18.911249999912823,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 741.18306666656,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/fe07a74f9fe4187f23e5b870c92c27f2?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_af101adeecbd36eb58678e324cc81b81",
                    "label": "Turmeric Latte",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/278/27813d68a1e102e600f186e17e3dda20.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=276977e23da087f0dff1536bd9ae8bc9333d40cb0aa06c2311e005cab363cabf",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/278/27813d68a1e102e600f186e17e3dda20-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5a4a81d7d0eefb181e554ea03748846161530bf827266e8671e7f4520087255",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/278/27813d68a1e102e600f186e17e3dda20-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d512025d1566aa760a1eebbab252060bc5699d088289ebcd5944f1413066a85",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/278/27813d68a1e102e600f186e17e3dda20.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=276977e23da087f0dff1536bd9ae8bc9333d40cb0aa06c2311e005cab363cabf",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Food Network",
                    "url": "https://www.foodnetwork.com/recipes/food-network-kitchen/turmeric-latte-3635232",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-latte-af101adeecbd36eb58678e324cc81b81/turmeric",
                    "yield": 2,
                    "dietLabels": [],
                    "healthLabels": [
                      "Vegetarian",
                      "Pescatarian",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Kosher"
                    ],
                    "cautions": [
                      "Tree-Nuts",
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "1/4 cup turmeric powder",
                      "3 tablespoons coconut oil",
                      "Freshly ground black pepper",
                      "2 cups coconut milk",
                      "1 cinnamon stick",
                      "1-inch piece ginger, peeled and sliced into thin coins",
                      "Honey, to taste (optional)"
                    ],
                    "ingredients": [
                      {
                        "text": "1/4 cup turmeric powder",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "turmeric",
                        "weight": 37.6000000006357,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "3 tablespoons coconut oil",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "coconut oil",
                        "weight": 40.8,
                        "foodCategory": "Oils",
                        "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
                        "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
                      },
                      {
                        "text": "Freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 1.6440000000019073,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                        "text": "2 cups coconut milk",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "coconut milk",
                        "weight": 452,
                        "foodCategory": "non-dairy beverages",
                        "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
                        "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
                      },
                      {
                        "text": "1 cinnamon stick",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "cinnamon stick",
                        "weight": 2.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                      },
                      {
                        "text": "1-inch piece ginger, peeled and sliced into thin coins",
                        "quantity": 1,
                        "measure": "inch",
                        "food": "piece ginger",
                        "weight": 15,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      },
                      {
                        "text": "Honey, to taste (optional)",
                        "quantity": 0,
                        "measure": null,
                        "food": "Honey",
                        "weight": 0,
                        "foodCategory": null,
                        "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                      }
                    ],
                    "calories": 1381.9964400019883,
                    "totalWeight": 549.6440000006377,
                    "totalTime": 15,
                    "cuisineType": [
                      "chinese"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "drinks"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1381.9964400019883,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 138.63193440002073,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 121.54119248001172,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.021056000000355995,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 6.676509160002869,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.113091120004825,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 43.75801800042804,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.631732000144787,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 1.528901600020418,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 13.317631600061736,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 71.45080000017204,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 180.26292000107645,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 296.9492400013255,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 1871.784760013248,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 36.078272400349825,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 4.34134360002863,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 555.7055200019039,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.8338800000005149,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 5.63200000000445,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.12734552000037078,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.06552520000095698,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.552762920008604,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.19968404000068576,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 72.88548000012749,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 72.88548000012749,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.8188176000281813,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.759828000088307,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 346.5626224000819,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 69.09982200009942,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 213.27989907695496,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 607.7059624000586,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 14.58600600014268,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 42.52692800057915,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 26.63526320012347,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 2.977116666673835,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 18.026292000107645,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 70.7022000003156,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 39.82520765985634,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 200.43484666861013,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 39.46676000026027,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 79.38650285741484,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.09265333333339054,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 6.257777777782723,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 10.612126666697565,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.040400000073614,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.204768250053775,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 15.36031076928352,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 18.22137000003187,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.125450666854542,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.299856666740256,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 138.63193440002073,
                        "hasRDI": true,
                        "daily": 213.27989907695496,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 121.54119248001172,
                            "hasRDI": true,
                            "daily": 607.7059624000586,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.021056000000355995,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 6.676509160002869,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 2.113091120004825,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 43.75801800042804,
                        "hasRDI": true,
                        "daily": 14.58600600014268,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 10.631732000144787,
                            "hasRDI": true,
                            "daily": 42.52692800057915,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 1.528901600020418,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 13.317631600061736,
                        "hasRDI": true,
                        "daily": 26.63526320012347,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 71.45080000017204,
                        "hasRDI": true,
                        "daily": 2.977116666673835,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 180.26292000107645,
                        "hasRDI": true,
                        "daily": 18.026292000107645,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 296.9492400013255,
                        "hasRDI": true,
                        "daily": 70.7022000003156,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1871.784760013248,
                        "hasRDI": true,
                        "daily": 39.82520765985634,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 36.078272400349825,
                        "hasRDI": true,
                        "daily": 200.43484666861013,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.34134360002863,
                        "hasRDI": true,
                        "daily": 39.46676000026027,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 555.7055200019039,
                        "hasRDI": true,
                        "daily": 79.38650285741484,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0.8338800000005149,
                        "hasRDI": true,
                        "daily": 0.09265333333339054,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 5.63200000000445,
                        "hasRDI": true,
                        "daily": 6.257777777782723,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.12734552000037078,
                        "hasRDI": true,
                        "daily": 10.612126666697565,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.06552520000095698,
                        "hasRDI": true,
                        "daily": 5.040400000073614,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.552762920008604,
                        "hasRDI": true,
                        "daily": 22.204768250053775,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.19968404000068576,
                        "hasRDI": true,
                        "daily": 15.36031076928352,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 72.88548000012749,
                        "hasRDI": true,
                        "daily": 18.22137000003187,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 72.88548000012749,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.8188176000281813,
                        "hasRDI": true,
                        "daily": 12.125450666854542,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 8.759828000088307,
                        "hasRDI": true,
                        "daily": 7.299856666740256,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 346.5626224000819,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/af101adeecbd36eb58678e324cc81b81?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5d427ac86cbe0e71951b74417357ce83",
                    "label": "Turmeric Cauliflower Curry recipes",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/edc/edcb60a8ec4b54a4e23e27415b928144?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=204d4160921c4e8ab5f14844fa7f47749f6aa86dde9b5fa6fca5b7206d5dde50",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/edc/edcb60a8ec4b54a4e23e27415b928144-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=791e5d6b2730e180d11c2f9b8f6671bc2dcf29c16b8e1ff97ff7f6474a858679",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/edc/edcb60a8ec4b54a4e23e27415b928144-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5d004f6e273291a1514b6d8eadb623d6be9e35448bb7fcd5bb17d62b5000593",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/edc/edcb60a8ec4b54a4e23e27415b928144?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=204d4160921c4e8ab5f14844fa7f47749f6aa86dde9b5fa6fca5b7206d5dde50",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Simply Recipes",
                    "url": "http://www.simplyrecipes.com/recipes/shahi_cauliflower_curry/",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-cauliflower-curry-recipes-5d427ac86cbe0e71951b74417357ce83/turmeric",
                    "yield": 6,
                    "dietLabels": [
                      "Balanced",
                      "High-Fiber"
                    ],
                    "healthLabels": [
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "1 head cauliflower (about 1 3/4 pounds)",
                      "3 medium Yukon gold potatoes (about 1 1/4 pounds)",
                      "1 1/2 cups water",
                      "1 medium onion, coarsely chopped",
                      "1 poblano chili pepper, seeded and coarsely chopped",
                      "1 2-inch piece fresh ginger, sliced",
                      "1 teaspoon ground turmeric",
                      "2 teaspoons garam masala",
                      "1/2 teaspoon salt, or to taste",
                      "2 tablespoons olive oil",
                      "1 cup frozen green peas",
                      "12 cherry tomatoes, halved",
                      "1 cup plain yogurt",
                      "3 tablespoons chopped fresh cilantro",
                      "2 limes, quartered, for garnish"
                    ],
                    "ingredients": [
                      {
                        "text": "1 head cauliflower (about 1 3/4 pounds)",
                        "quantity": 1.75,
                        "measure": "pound",
                        "food": "cauliflower",
                        "weight": 793.7866475000001,
                        "foodCategory": "vegetables",
                        "foodId": "food_buqfaxubzh6hi5asev8a5aj9sr71",
                        "image": "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg"
                      },
                      {
                        "text": "3 medium Yukon gold potatoes (about 1 1/4 pounds)",
                        "quantity": 1.25,
                        "measure": "pound",
                        "food": "Yukon gold potatoes",
                        "weight": 566.9904625,
                        "foodCategory": "vegetables",
                        "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                        "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                      },
                      {
                        "text": "1 1/2 cups water",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "water",
                        "weight": 355.5,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      },
                      {
                        "text": "1 medium onion, coarsely chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 110,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                        "text": "1 poblano chili pepper, seeded and coarsely chopped",
                        "quantity": 1,
                        "measure": "pepper",
                        "food": "poblano chili",
                        "weight": 45,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
                        "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
                      },
                      {
                        "text": "1 2-inch piece fresh ginger, sliced",
                        "quantity": 1,
                        "measure": "piece",
                        "food": "fresh ginger",
                        "weight": 15,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                      },
                      {
                        "text": "1 teaspoon ground turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "2 teaspoons garam masala",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "masala",
                        "weight": 3.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avzem7oamop4dsa5wb65obt5ldgi",
                        "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
                      },
                      {
                        "text": "1/2 teaspoon salt, or to taste",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                        "text": "2 tablespoons olive oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 27,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                        "text": "1 cup frozen green peas",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "green peas",
                        "weight": 145,
                        "foodCategory": "vegetables",
                        "foodId": "food_bbi35jtbjt7un9bsa2m7eazlsk91",
                        "image": "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg"
                      },
                      {
                        "text": "12 cherry tomatoes, halved",
                        "quantity": 12,
                        "measure": "<unit>",
                        "food": "cherry tomatoes",
                        "weight": 180,
                        "foodCategory": "vegetables",
                        "foodId": "food_a30b0hpbvavginafe0tocbf6ymje",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                      },
                      {
                        "text": "1 cup plain yogurt",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "plain yogurt",
                        "weight": 245,
                        "foodCategory": "yogurt",
                        "foodId": "food_a79ojfkbgdeekgblqmky9bunr8f6",
                        "image": "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg"
                      },
                      {
                        "text": "3 tablespoons chopped fresh cilantro",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "cilantro",
                        "weight": 2.999999999949279,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                      },
                      {
                        "text": "2 limes, quartered, for garnish",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "limes",
                        "weight": 134,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                      }
                    ],
                    "calories": 1198.1076539687383,
                    "totalWeight": 2630.0771099999492,
                    "totalTime": 35,
                    "cuisineType": [
                      "indian"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "starter"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1198.1076539687383,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 39.53164117518723,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 10.427235781937492,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.00168,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 22.386872317087366,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.194198284881229,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 189.29758172981064,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 42.96887558124859,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 52.45171917287457,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 45.68182913887393,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 31.85,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 1587.3965650624766,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 700.2052040749661,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 366.3988519062368,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 5954.586461368486,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 13.188278125124103,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 7.673258204187247,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 1120.7285476187258,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 237.21599999982908,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 709.5926049293614,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.4030756012499663,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2997036994999178,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 13.908207908886936,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.5368638296811747,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 706.3452445749687,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 706.3452445749687,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.9065000000000001,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.24500000000000005,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.7337536026862335,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 215.43654445296772,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 2194.2947210638285,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 59.90538269843692,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 60.81790950028805,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 52.136178909687466,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 63.09919390993687,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 171.87550232499433,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 91.36365827774786,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 10.616666666666667,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 66.14152354426986,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 70.02052040749662,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 87.23782188243733,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 126.69332896528694,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 73.26821180624502,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 69.7568927653386,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 160.10407823124652,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 26.35733333331434,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 788.4362276992905,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 116.92296677083053,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 99.97720765383983,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 86.92629943054335,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 272.06644843701343,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 176.58631114374217,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 37.770833333333336,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.6333333333333335,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 44.89169068457489,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 179.53045371080643,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 39.53164117518723,
                        "hasRDI": true,
                        "daily": 60.81790950028805,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 10.427235781937492,
                            "hasRDI": true,
                            "daily": 52.136178909687466,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.00168,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 22.386872317087366,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 4.194198284881229,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 189.29758172981064,
                        "hasRDI": true,
                        "daily": 63.09919390993687,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 42.96887558124859,
                            "hasRDI": true,
                            "daily": 171.87550232499433,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 52.45171917287457,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 45.68182913887393,
                        "hasRDI": true,
                        "daily": 91.36365827774786,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 31.85,
                        "hasRDI": true,
                        "daily": 10.616666666666667,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1587.3965650624766,
                        "hasRDI": true,
                        "daily": 66.14152354426986,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 700.2052040749661,
                        "hasRDI": true,
                        "daily": 70.02052040749662,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 366.3988519062368,
                        "hasRDI": true,
                        "daily": 87.23782188243733,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5954.586461368486,
                        "hasRDI": true,
                        "daily": 126.69332896528694,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.188278125124103,
                        "hasRDI": true,
                        "daily": 73.26821180624502,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.673258204187247,
                        "hasRDI": true,
                        "daily": 69.7568927653386,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1120.7285476187258,
                        "hasRDI": true,
                        "daily": 160.10407823124652,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 237.21599999982908,
                        "hasRDI": true,
                        "daily": 26.35733333331434,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 709.5926049293614,
                        "hasRDI": true,
                        "daily": 788.4362276992905,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.4030756012499663,
                        "hasRDI": true,
                        "daily": 116.92296677083053,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2997036994999178,
                        "hasRDI": true,
                        "daily": 99.97720765383983,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 13.908207908886936,
                        "hasRDI": true,
                        "daily": 86.92629943054335,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.5368638296811747,
                        "hasRDI": true,
                        "daily": 272.06644843701343,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 706.3452445749687,
                        "hasRDI": true,
                        "daily": 176.58631114374217,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 706.3452445749687,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.9065000000000001,
                        "hasRDI": true,
                        "daily": 37.770833333333336,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.24500000000000005,
                        "hasRDI": true,
                        "daily": 1.6333333333333335,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.7337536026862335,
                        "hasRDI": true,
                        "daily": 44.89169068457489,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 215.43654445296772,
                        "hasRDI": true,
                        "daily": 179.53045371080643,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2194.2947210638285,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/5d427ac86cbe0e71951b74417357ce83?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8e025af8e71eb18461360b34ceac0c66",
                    "label": "Turmeric Matzo Balls",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2ce/2ce8c97d020a128e89014056057f9978.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9445a5de3f3dc34133085964e413e265ecbbe4c365c5b0b6b9379d12dfa8e1d3",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ce/2ce8c97d020a128e89014056057f9978-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=812295da43a25844d9d1a6a37aa6df9bc3a302c897f13130685ac0d2ab8c1036",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ce/2ce8c97d020a128e89014056057f9978-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=508aba563b5cca449c0120f7e4f12d5967bac650f4a4bb9e446ae30a6053ad8a",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ce/2ce8c97d020a128e89014056057f9978.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9445a5de3f3dc34133085964e413e265ecbbe4c365c5b0b6b9379d12dfa8e1d3",
                        "width": 300,
                        "height": 300
                      }
                    },
                    "source": "Epicurious",
                    "url": "https://www.epicurious.com/recipes/food/views/turmeric-matzo-balls-364229",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-matzo-balls-8e025af8e71eb18461360b34ceac0c66/turmeric",
                    "yield": 6,
                    "dietLabels": [
                      "Low-Sodium"
                    ],
                    "healthLabels": [
                      "Sugar-Conscious",
                      "Low Potassium",
                      "Kidney-Friendly",
                      "Keto-Friendly",
                      "Vegetarian",
                      "Pescatarian",
                      "Mediterranean",
                      "Dairy-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                      "2 large eggs, plus 1 egg white",
                      "2 tablespoons vegetable oil",
                      "1 teaspoon ground turmeric",
                      "1/2-3/4 cup matzo ball mix (usually 1-1 1/2 bags out of a box)"
                    ],
                    "ingredients": [
                      {
                        "text": "2 large eggs, plus 1 egg white",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                      },
                      {
                        "text": "2 large eggs, plus 1 egg white",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg white",
                        "weight": 26.4,
                        "foodCategory": "Eggs",
                        "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
                        "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
                      },
                      {
                        "text": "2 tablespoons vegetable oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                      },
                      {
                        "text": "1 teaspoon ground turmeric",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "ground turmeric",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "1/2-3/4 cup matzo ball mix (usually 1-1 1/2 bags out of a box)",
                        "quantity": 0.625,
                        "measure": "cup",
                        "food": "matzo",
                        "weight": 34.375,
                        "foodCategory": "crackers",
                        "foodId": "food_a7qwjpbarote7sbjmkrfiaovtoo3",
                        "image": "https://www.edamam.com/food-img/656/656d9f10022c99adde7b67b03b5b17b2.jpg"
                      }
                    ],
                    "calories": 549.3892500000001,
                    "totalWeight": 191.775,
                    "totalTime": 0,
                    "cuisineType": [
                      "mediterranean"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 549.3892500000001,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 38.133630000000004,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.0819075,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.25444000000000006,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 23.872606250000008,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.92840125,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 31.698794999999997,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.71225,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.7534274999999999,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.1655,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 372,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 186.63400000000001,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 67.35675,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 29.73775,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 281.932,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 4.50737,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 1.6666699999999999,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 241.52375,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 160,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.020999999999999998,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.17582725,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.67742725,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.4810949999999998,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.21406124999999998,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 54.49974999999999,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 54.49974999999999,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.91376,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.307525000000002,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.8051249999999999,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 101.13210500000002,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 27.469462500000002,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 58.66712307692308,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 25.4095375,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 10.566264999999998,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.849,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.331,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 124,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 7.776416666666667,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 6.7356750000000005,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 7.0804166666666655,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 5.9985531914893615,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 25.040944444444442,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 15.151545454545452,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 34.503392857142856,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 17.77777777777778,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.02333333333333333,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 14.652270833333334,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 52.109788461538464,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.256843749999998,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 16.46625,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 13.624937499999998,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 38.07333333333334,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 13.333333333333334,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 48.71683333333335,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.6709374999999999,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 38.133630000000004,
                        "hasRDI": true,
                        "daily": 58.66712307692308,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 5.0819075,
                            "hasRDI": true,
                            "daily": 25.4095375,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.25444000000000006,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 23.872606250000008,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 6.92840125,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 31.698794999999997,
                        "hasRDI": true,
                        "daily": 10.566264999999998,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 1.71225,
                            "hasRDI": true,
                            "daily": 6.849,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 0.7534274999999999,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.1655,
                        "hasRDI": true,
                        "daily": 38.331,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 372,
                        "hasRDI": true,
                        "daily": 124,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 186.63400000000001,
                        "hasRDI": true,
                        "daily": 7.776416666666667,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 67.35675,
                        "hasRDI": true,
                        "daily": 6.7356750000000005,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 29.73775,
                        "hasRDI": true,
                        "daily": 7.0804166666666655,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 281.932,
                        "hasRDI": true,
                        "daily": 5.9985531914893615,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 4.50737,
                        "hasRDI": true,
                        "daily": 25.040944444444442,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.6666699999999999,
                        "hasRDI": true,
                        "daily": 15.151545454545452,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 241.52375,
                        "hasRDI": true,
                        "daily": 34.503392857142856,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 160,
                        "hasRDI": true,
                        "daily": 17.77777777777778,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.020999999999999998,
                        "hasRDI": true,
                        "daily": 0.02333333333333333,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.17582725,
                        "hasRDI": true,
                        "daily": 14.652270833333334,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.67742725,
                        "hasRDI": true,
                        "daily": 52.109788461538464,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.4810949999999998,
                        "hasRDI": true,
                        "daily": 9.256843749999998,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.21406124999999998,
                        "hasRDI": true,
                        "daily": 16.46625,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 54.49974999999999,
                        "hasRDI": true,
                        "daily": 13.624937499999998,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 54.49974999999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.91376,
                        "hasRDI": true,
                        "daily": 38.07333333333334,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2,
                        "hasRDI": true,
                        "daily": 13.333333333333334,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.307525000000002,
                        "hasRDI": true,
                        "daily": 48.71683333333335,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 0.8051249999999999,
                        "hasRDI": true,
                        "daily": 0.6709374999999999,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 101.13210500000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/8e025af8e71eb18461360b34ceac0c66?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                },
                {
                  "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2714202a71857c405b081f0f803d0e2f",
                    "label": "Turmeric Deviled Eggs",
                    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/10d/10d43fc76a36d967892e42190da4968c.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dd170b131d0052b1f0df51abc1574324005afcd69560932ca2714e22ab451de3",
                    "images": {
                      "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/10d/10d43fc76a36d967892e42190da4968c-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d6d15b346fea1a10a430b43cfef73a4d13ad2f8cd94d30fd921d3f6d4e44ab18",
                        "width": 100,
                        "height": 100
                      },
                      "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/10d/10d43fc76a36d967892e42190da4968c-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9c0351d65346b9fd471b09b9bed684e16f36bed22fac4e86335cecbde4871323",
                        "width": 200,
                        "height": 200
                      },
                      "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/10d/10d43fc76a36d967892e42190da4968c.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dd170b131d0052b1f0df51abc1574324005afcd69560932ca2714e22ab451de3",
                        "width": 300,
                        "height": 300
                      },
                      "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/10d/10d43fc76a36d967892e42190da4968c-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEMDd7UfBy%2FlZzmLUOOh2YWeq0qs5fH7%2FR%2FcPQ1g8zSaAiEAmXKjE9uJyQEuX1jhTql3cr8%2Bdy%2FE8HRtGg2EWW4q7bkq2wQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDO35aEhsfq7SYvNjAyqvBECaBGg3jUQoOsonJ9rE6X5GMZlxsXlGRsecb81AS4l2XYGm1vFpkb4M%2FyiLsLdb8AsHnfWkXT3PSg8gx271Mvg8ZsuDq3WA89dCkvbbp8D9T3RdKWcJsG1lyRD235%2F5AIzkRxEyDG8l4apV%2BW4Q4ciNPce5owSter0hBUfIfS0xt8DD8VchSfXQGlsSDtQk3Pf7KaqImtV5Su5%2FEmF0uhC%2FUQd6RdQOkK7XHU2oRNubt2rxb77Lwc68rUWT1YYTS8JHqrmQIp%2Fxw8jBCs3exu7ZlumauftBUgd85cySzVwgRArItMu2dI%2B7n7TBHs6555gbRDO0%2BJU2MUuDSnAKZ9HtAc2sC8n9Mr8ie0as9VJan90a4ckYka7ovsVczSFXzXa2HEjQA%2Fq04c0Odu8A6M9arwoZdhV39LyEopnoU2ti77XnZG1ppIJPuWFvIPsnVAwKaKUQU2Rh169NXKmTN%2FC3EihL8jeUdqhZvfROAO9%2Fj762yunIq0fybJ2slc8FYvhBeX3bl8WJ476JWfD6AyBa5xcTnDNSwYuwrBEnrZspwPahBjwJfCHmYUYIQH%2FNLeALv73OEHFG5GfTtL4xS3hSlu1ccRNv9a2V7fRUV1mBfd%2BCdV8kyFpWvbN613KYrj1K5dBZMntH%2FTe7hC6SOgRZiFBVgqdAgPh7qe0ZtbzYKGdrziSRvYmOn9iEiL4FWuHqEGlpYkRbLYL8wsUpMr8ajnLYxRBCh%2FRGLfchVUAwkMuLlAY6qQG%2B5C7YLDeN21CCOGwcld6%2BON1A6mx7f1zgmlvUUX3%2BoMLDRaGtNQ2O6%2FIZ1p3JyzQVEAU%2FYY%2FAdVUn4F6hOTq16OgRGd1tW1SO060ft%2FlIo878k%2BfdQl6T8EB%2BNtZGUMKq8AO%2BDb%2Bkk6xjiK1usrz%2BARO%2Fqg7wlRKOEAUskcEcew4NWiUTHNVRTvxtP6V6ctboY9qXoEGHDIrOkv%2FcYsppJj0CdjXIZ8JD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T013549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPP6RED3F%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad72f299ff9886bb56afdb3d1493a1feefcb6be3d0542c53bdf6e0fc6f517042",
                        "width": 600,
                        "height": 600
                      }
                    },
                    "source": "The Daily Meal",
                    "url": "http://www.thedailymeal.com/recipes/turmeric-deviled-eggs-recipe",
                    "shareAs": "http://www.edamam.com/recipe/turmeric-deviled-eggs-2714202a71857c405b081f0f803d0e2f/turmeric",
                    "yield": 12,
                    "dietLabels": [],
                    "healthLabels": [
                      "Vegetarian",
                      "Pescatarian",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                    ],
                    "cautions": [
                      "Sulfites"
                    ],
                    "ingredientLines": [
                      "2 Cups water",
                      "1 Cup apple cider vinegar",
                      "2 Tablespoons grated fresh turmeric or 1 Tbsp. dried ground turmeric",
                      "2 3/8 Teaspoons kosher salt, divided",
                      "6 Pete and Gerry’s hard boiled eggs",
                      "1/3 Teaspoon curry powder",
                      "1/4 Teaspoon ground cumin",
                      "1/4 Cup mayonnaise",
                      "1 Teaspoon Dijon mustard",
                      "Additional chopped chives (optional)"
                    ],
                    "ingredients": [
                      {
                        "text": "2 Cups water",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "water",
                        "weight": 474,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      },
                      {
                        "text": "1 Cup apple cider vinegar",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "apple cider vinegar",
                        "weight": 239,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                        "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                      },
                      {
                        "text": "2 Tablespoons grated fresh turmeric or 1 Tbsp. dried ground turmeric",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "ground turmeric",
                        "weight": 18.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                        "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
                      },
                      {
                        "text": "2 3/8 Teaspoons kosher salt, divided",
                        "quantity": 2.375,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 11.528645833918079,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                        "text": "6 Pete and Gerry’s hard boiled eggs",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "hard boiled eggs",
                        "weight": 240,
                        "foodCategory": "Eggs",
                        "foodId": "food_a2y52zfbr22uq1ah5thnqac607ft",
                        "image": "https://www.edamam.com/food-img/e54/e54c012fabed0f9cf211a817d1e23c5c.jpg"
                      },
                      {
                        "text": "1/3 Teaspoon curry powder",
                        "quantity": 0.3333333333333333,
                        "measure": "teaspoon",
                        "food": "curry powder",
                        "weight": 0.6666666666666666,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ao4koeoajh7yjxaq2knzrbv55y8o",
                        "image": "https://www.edamam.com/food-img/9ce/9ce02a2887385fd2adaec8dd8adcf9c5.jpg"
                      },
                      {
                        "text": "1/4 Teaspoon ground cumin",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "cumin",
                        "weight": 0.525,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                        "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
                      },
                      {
                        "text": "1/4 Cup mayonnaise",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "mayonnaise",
                        "weight": 57.75,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bu8t61zaplle7dbrzk81dbygq0qj",
                        "image": "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg"
                      },
                      {
                        "text": "1 Teaspoon Dijon mustard",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "Dijon mustard",
                        "weight": 5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                        "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
                      },
                      {
                        "text": "Additional chopped chives (optional)",
                        "quantity": 0,
                        "measure": null,
                        "food": "chives",
                        "weight": 0,
                        "foodCategory": "vegetables",
                        "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                        "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
                      }
                    ],
                    "calories": 887.6114166666666,
                    "totalWeight": 1040.0900963181793,
                    "totalTime": 0,
                    "cuisineType": [
                      "american"
                    ],
                    "mealType": [
                      "lunch/dinner"
                    ],
                    "dishType": [
                      "starter"
                    ],
                    "totalNutrients": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 887.6114166666666,
                        "unit": "kcal"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 70.9198175,
                        "unit": "g"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 14.857339416666665,
                        "unit": "g"
                      },
                      "FATRN": {
                        "label": "Trans",
                        "quantity": 0.010978000000000002,
                        "unit": "g"
                      },
                      "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 21.25631866666667,
                        "unit": "g"
                      },
                      "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 30.292516083333332,
                        "unit": "g"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 18.42898,
                        "unit": "g"
                      },
                      "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.877391666666667,
                        "unit": "g"
                      },
                      "SUGAR": {
                        "label": "Sugars",
                        "quantity": 4.3236925,
                        "unit": "g"
                      },
                      "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 32.387609166666664,
                        "unit": "g"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 917.7224999999999,
                        "unit": "mg"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 2408.596531,
                        "unit": "mg"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 195.1153731163631,
                        "unit": "mg"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 85.85898429651513,
                        "unit": "mg"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 893.0448743721208,
                        "unit": "mg"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 14.244573151183324,
                        "unit": "mg"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 3.6018817629848465,
                        "unit": "mg"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 498.5984166666667,
                        "unit": "mg"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 358.19266666666664,
                        "unit": "µg"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.19169166666666665,
                        "unit": "mg"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.18262433333333333,
                        "unit": "mg"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2659500833333335,
                        "unit": "mg"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.4814230833333333,
                        "unit": "mg"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.31699974999999997,
                        "unit": "mg"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 110.13583333333332,
                        "unit": "µg"
                      },
                      "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 110.13583333333332,
                        "unit": "µg"
                      },
                      "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.664,
                        "unit": "µg"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.28,
                        "unit": "µg"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.508589166666666,
                        "unit": "mg"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.002883333333334,
                        "unit": "µg"
                      },
                      "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                      },
                      "WATER": {
                        "label": "Water",
                        "quantity": 883.5313785259698,
                        "unit": "g"
                      }
                    },
                    "totalDaily": {
                      "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 44.38057083333333,
                        "unit": "%"
                      },
                      "FAT": {
                        "label": "Fat",
                        "quantity": 109.10741153846152,
                        "unit": "%"
                      },
                      "FASAT": {
                        "label": "Saturated",
                        "quantity": 74.28669708333334,
                        "unit": "%"
                      },
                      "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 6.142993333333333,
                        "unit": "%"
                      },
                      "FIBTG": {
                        "label": "Fiber",
                        "quantity": 19.509566666666668,
                        "unit": "%"
                      },
                      "PROCNT": {
                        "label": "Protein",
                        "quantity": 64.77521833333333,
                        "unit": "%"
                      },
                      "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 305.90749999999997,
                        "unit": "%"
                      },
                      "NA": {
                        "label": "Sodium",
                        "quantity": 100.35818879166668,
                        "unit": "%"
                      },
                      "CA": {
                        "label": "Calcium",
                        "quantity": 19.511537311636307,
                        "unit": "%"
                      },
                      "MG": {
                        "label": "Magnesium",
                        "quantity": 20.44261530869408,
                        "unit": "%"
                      },
                      "K": {
                        "label": "Potassium",
                        "quantity": 19.000954773874913,
                        "unit": "%"
                      },
                      "FE": {
                        "label": "Iron",
                        "quantity": 79.13651750657402,
                        "unit": "%"
                      },
                      "ZN": {
                        "label": "Zinc",
                        "quantity": 32.744379663498606,
                        "unit": "%"
                      },
                      "P": {
                        "label": "Phosphorus",
                        "quantity": 71.22834523809524,
                        "unit": "%"
                      },
                      "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 39.79918518518518,
                        "unit": "%"
                      },
                      "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.21299074074074073,
                        "unit": "%"
                      },
                      "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 15.218694444444445,
                        "unit": "%"
                      },
                      "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 97.38077564102565,
                        "unit": "%"
                      },
                      "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.008894270833333,
                        "unit": "%"
                      },
                      "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 24.38459615384615,
                        "unit": "%"
                      },
                      "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 27.53395833333333,
                        "unit": "%"
                      },
                      "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 111.00000000000001,
                        "unit": "%"
                      },
                      "VITD": {
                        "label": "Vitamin D",
                        "quantity": 35.2,
                        "unit": "%"
                      },
                      "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 23.39059444444444,
                        "unit": "%"
                      },
                      "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.3357361111111117,
                        "unit": "%"
                      }
                    },
                    "digest": [
                      {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 70.9198175,
                        "hasRDI": true,
                        "daily": 109.10741153846152,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 14.857339416666665,
                            "hasRDI": true,
                            "daily": 74.28669708333334,
                            "unit": "g"
                          },
                          {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.010978000000000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 21.25631866666667,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 30.292516083333332,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 18.42898,
                        "hasRDI": true,
                        "daily": 6.142993333333333,
                        "unit": "g",
                        "sub": [
                          {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 4.877391666666667,
                            "hasRDI": true,
                            "daily": 19.509566666666668,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 4.3236925,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          },
                          {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                          }
                        ]
                      },
                      {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 32.387609166666664,
                        "hasRDI": true,
                        "daily": 64.77521833333333,
                        "unit": "g"
                      },
                      {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 917.7224999999999,
                        "hasRDI": true,
                        "daily": 305.90749999999997,
                        "unit": "mg"
                      },
                      {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2408.596531,
                        "hasRDI": true,
                        "daily": 100.35818879166668,
                        "unit": "mg"
                      },
                      {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 195.1153731163631,
                        "hasRDI": true,
                        "daily": 19.511537311636307,
                        "unit": "mg"
                      },
                      {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 85.85898429651513,
                        "hasRDI": true,
                        "daily": 20.44261530869408,
                        "unit": "mg"
                      },
                      {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 893.0448743721208,
                        "hasRDI": true,
                        "daily": 19.000954773874913,
                        "unit": "mg"
                      },
                      {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 14.244573151183324,
                        "hasRDI": true,
                        "daily": 79.13651750657402,
                        "unit": "mg"
                      },
                      {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.6018817629848465,
                        "hasRDI": true,
                        "daily": 32.744379663498606,
                        "unit": "mg"
                      },
                      {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 498.5984166666667,
                        "hasRDI": true,
                        "daily": 71.22834523809524,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 358.19266666666664,
                        "hasRDI": true,
                        "daily": 39.79918518518518,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.19169166666666665,
                        "hasRDI": true,
                        "daily": 0.21299074074074073,
                        "unit": "mg"
                      },
                      {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.18262433333333333,
                        "hasRDI": true,
                        "daily": 15.218694444444445,
                        "unit": "mg"
                      },
                      {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2659500833333335,
                        "hasRDI": true,
                        "daily": 97.38077564102565,
                        "unit": "mg"
                      },
                      {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.4814230833333333,
                        "hasRDI": true,
                        "daily": 3.008894270833333,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.31699974999999997,
                        "hasRDI": true,
                        "daily": 24.38459615384615,
                        "unit": "mg"
                      },
                      {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 110.13583333333332,
                        "hasRDI": true,
                        "daily": 27.53395833333333,
                        "unit": "µg"
                      },
                      {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 110.13583333333332,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.664,
                        "hasRDI": true,
                        "daily": 111.00000000000001,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 5.28,
                        "hasRDI": true,
                        "daily": 35.2,
                        "unit": "µg"
                      },
                      {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.508589166666666,
                        "hasRDI": true,
                        "daily": 23.39059444444444,
                        "unit": "mg"
                      },
                      {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 4.002883333333334,
                        "hasRDI": true,
                        "daily": 3.3357361111111117,
                        "unit": "µg"
                      },
                      {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      },
                      {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 883.5313785259698,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                      }
                    ]
                  },
                  "_links": {
                    "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/2714202a71857c405b081f0f803d0e2f?type=public&app_id=87952f56&app_key=ec69cac6f4e5992b48b29bb6d2c37dc0",
                      "title": "Self"
                    }
                  }
                }
              ]
            }

            ]

*/