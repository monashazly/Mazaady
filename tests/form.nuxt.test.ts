import { mount } from "@vue/test-utils";
import Form from "~/components/Form.vue";
import Product from "~/components/Product.vue";
import { createVuetify } from "vuetify";
import { describe, it, expect } from "vitest";

describe("FormComponent", () => {
  it("Does not render text field by default", async () => {
    const wrapper = mount(Form, {
      global: {
        plugins: [createVuetify()],
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find("v-text-field").exists()).toBe(false);
  });
});
describe("ProductComponent", () => {
  it("renders product details correctly", () => {
    const product = {
      id: 1,
      name: "Six-piece clothing set (blouse - pants - hat and",
      price: 1000,
      image: "/item1.png",
      days: 2,
      hours: 10,
      minutes: 20,
      sale: false,
    };

    const wrapper = mount(Product, {
      props: {
        product,
      },
      global: {
        plugins: [createVuetify()],
      },
    });

    expect(wrapper.text()).toContain(product.name);
    expect(wrapper.text()).toContain(`${product.price} EGP`);
    expect(wrapper.text()).toContain(`${product.days} Days`);
    expect(wrapper.text()).toContain(`${product.hours} Hrs`);
    expect(wrapper.text()).toContain(`${product.minutes} Mins`);
  });

  it("applies correct classes based on sale prop", () => {
    const productOnSale = {
      id: 3,
      name: "Six-piece clothing set (blouse - pants - hat and",
      price: 1000,
      image: "/item3.png",
      days: 2,
      hours: 10,
      minutes: 20,
      sale: false,
    };

    const wrapper = mount(Product, {
      props: {
        product: productOnSale,
      },
      global: {
        plugins: [createVuetify()],
      },
    });

    expect(wrapper.find(".tw-bg-secondary").exists()).toBe(false);
  });
});
