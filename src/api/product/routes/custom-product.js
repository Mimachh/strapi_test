module.exports = {
    routes: [
        {
            method: "GET",
            "path": "/products/build",
            "handler": "product.build",
            config: {
                auth: false,
                "policies": []
              },
        },
    ],
  };