import * as yup from "yup"

const productSchema =yup.object({

        name:yup.string().required().trim().max(35),
        brand:yup.string().required().trim().max(35),
        price:yup.number().min(0).required(),
        quantity:yup.number().min(1).required(),
        category:yup.string()
        .trim()
        .required()
        .oneOf([
            "grocery",
            "electronics",
            "bakery",
            "shoes",
            "clothing",
            "electrical",
            "stationery"]),
        description:yup.string().trim().required().min(20).max(200),
        hasFreeShipping:yup.boolean().default()
       
});
export default productSchema;