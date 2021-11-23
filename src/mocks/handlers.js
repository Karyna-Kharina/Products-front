import { rest } from "msw";
import key from "weak-key";
import productFixtures from "../additionalData/fixtures/productFixtures";
import userFixtures from "../additionalData/fixtures/userFixtures";

export const handlers = [
    rest.get("http://localhost:9000/api/products", (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json(productFixtures)
        );
    }),
    rest.post("http://localhost:9000/api/products", (req, res, ctx) => {
        const { name, price, image } = req.body;

        productFixtures.push({
            id: key(req.body),
            name,
            price,
            image
        });

        return res(
            ctx.status(200),
            ctx.json({ message: "Product is posted." })
        );
    }),
    rest.delete("http://localhost:9000/api/products/:productId", (req, res, ctx) => {
        const { productId } = req.params;
        const index = productFixtures.findIndex(({ id }) => id === productId);
        console.log("index", index, ", id", productId);

        return res(
            // Respond with a 200 status code
            ctx.status(200)
        );
    }),

    rest.get("http://localhost:9000/api/users", (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
                content: userFixtures,
                pageable: { pageNumber: 0 },
                totalElements: userFixtures.length
            })
        );
    }),
    rest.post("http://localhost:9000/api/users", (req, res, ctx) => {
        const index = userFixtures.findIndex(({ id }) => id === req.body.id);
        userFixtures[index] = req.body;

        return res(
            ctx.status(200),
            ctx.json({ message: "User is saved" })
        );
    }),
    rest.delete("http://localhost:9000/api/users/:userId", (req, res, ctx) => {
        const { userId } = req.params;
        const index = userFixtures.findIndex(({ id }) => id === userId);

        if (index === -1) {
            return res(ctx.status(404));
        }

        userFixtures.splice(index, 1);
        return res(ctx.status(200));
    }),
    rest.get("http://localhost:9000/api/users/profile", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(userFixtures[0])
        );
    })
];