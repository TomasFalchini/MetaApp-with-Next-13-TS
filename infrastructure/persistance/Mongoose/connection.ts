import mongoose from "mongoose";

async function main() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://tomasfalchini:Sopadeavestruz7@cluster0.fv06faq.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => {
        console.log("coneccted");
      });
  } catch (err) {
    console.log("entrando aca");
    console.log(err);
  }
}

main();
