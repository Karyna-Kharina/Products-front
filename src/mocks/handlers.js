import { rest } from "msw";
import key from "weak-key";
import productFixtures from "../additionalData/fixtures/productFixtures";
import userFixtures from "../additionalData/fixtures/userFixtures";
import { PRODUCTS_API, PRODUCTS_API_SEARCH, USERS_API, USERS_API_SEARCH } from "../additionalData/links/back";

export const handlers = [
    rest.get(PRODUCTS_API, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(productFixtures)
        );
    }),
    rest.get(PRODUCTS_API_SEARCH, (req, res, ctx) => {
        const filteredName = req.url.searchParams.get("name");

        const result = productFixtures.filter((product) =>
            product.id.includes(filteredName) ||
            product.name.includes(filteredName) ||
            product.price.includes(filteredName)
        );

        return res(
            ctx.status(200),
            ctx.json(result)
        );
    }),
    rest.post(PRODUCTS_API, (req, res, ctx) => {
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
    rest.delete(PRODUCTS_API + "/:productId", (req, res, ctx) => {
        const { productId } = req.params;
        const index = productFixtures.findIndex(({ id }) => id === productId);

        if (index === -1) {
            return res(ctx.status(404));
        }

        productFixtures.splice(index, 1);
        return res(ctx.status(200));
    }),

    rest.get(USERS_API, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(userFixtures)
        );
    }),
    rest.get(USERS_API_SEARCH, (req, res, ctx) => {
        const filteredName = req.url.searchParams.get("name");

        const result = userFixtures.filter((user) =>
            user.id.includes(filteredName) ||
            user.firstName.includes(filteredName) ||
            user.lastName.includes(filteredName) ||
            user.phoneNumber.includes(filteredName) ||
            user.email.includes(filteredName)
        );

        return res(
            ctx.status(200),
            ctx.json(result)
        );
    }),
    rest.post(USERS_API, (req, res, ctx) => {
        const index = userFixtures.findIndex(({ id }) => id === req.body.id);
        userFixtures[index] = req.body;

        return res(
            ctx.status(200),
            ctx.json({ message: "User is saved" })
        );
    }),
    rest.delete(USERS_API + "/:userId", (req, res, ctx) => {
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
    }),
    rest.post("http://localhost:9000/api/users/sign-up", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(req.body)
        );
    })

    // rest.get(NEWS_API, (req, res, ctx) => {
    //     return res(
    //         ctx.status(200),
    //         ctx.json(newsFixtures)
    //     );
    // })
];