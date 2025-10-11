// promise methods:
const async_handler = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((err) => {
            next(err);
        });
    };
};

// try-catch methods:
/* 
    const async_handler = (func) => async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            });
        };
    };
*/

export default async_handler;

/*  note:
    const async_handler = () => {};
    const async_handler = (func) => {() => {}};
    const async_handler = (func) => () => {};
    const async_handler = (func) => async () => {};
*/

//? note:
/* 
    What is this function?
    This is a higher-order function that wraps around asynchronous Express route handlers to automatically handle promise rejections and errors.
*/