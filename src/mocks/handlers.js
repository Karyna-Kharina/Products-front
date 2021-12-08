import { rest } from "msw";
import productFixtures from "../additionalData/fixtures/productFixtures";
import userFixtures from "../additionalData/fixtures/userFixtures";
import {
    PRODUCTS_API,
    PRODUCTS_API_SEARCH,
    SIGN_IN_API,
    SIGN_UP_API,
    USERS_API,
    USERS_API_SEARCH
} from "../additionalData/links/back";

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
        productFixtures.push(req.body);

        return res(
            ctx.status(200),
            ctx.json({ message: "Product is saved." })
        );
    }),
    rest.put(PRODUCTS_API, (req, res, ctx) => {
        const product = req.body;
        const index = productFixtures.findIndex(({ id }) => id === product.id);
        productFixtures.splice(index, 1, product);

        return res(
            ctx.status(200),
            ctx.json({ message: "Product is updated." })
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
    rest.put(USERS_API, (req, res, ctx) => {
        const user = req.body;
        const index = userFixtures.findIndex(({ id }) => id === user.id);
        userFixtures.splice(index, 1, user);

        return res(
            ctx.status(200),
            ctx.json({ message: "User is updated." })
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

    rest.get(SIGN_IN_API, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(userFixtures[0])
        );
    }),
    rest.post(SIGN_UP_API, (req, res, ctx) => {
        userFixtures.push(req.body);

        return res(
            ctx.status(200),
            ctx.json(req.body)
        );
    })
];