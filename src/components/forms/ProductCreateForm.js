import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  handleSubChange,
  subOptions,
  sub2Options,
  handleSub2Change,
  attributes,
  addAttribute,
}) => {
  const {
    art,
    title,
    description,
    price,
    disprice,
    categories,
    category,
    shipping,
    quantity,
    weight,
    images,
    colors,
    brands,
    color,
    brand,
    onSale,
    saleTime,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Article Number (Required) </label>
        <input
          type="number"
          className="form-control"
          name="art"
          value={art}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Title (Required) </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price [0 or ~]</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Discount Price (optional - if flashsale then required)</label>
        <input
          type="number"
          name="disprice"
          className="form-control"
          value={disprice}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping (Required)</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      <div className="form-group">
        <label>Weight (Required for shipping)</label>
        <input
          type="number"
          name="weight"
          className="form-control"
          value={weight}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Quantity (for flashsale scarcity)</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Color (Required)</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Brand (Required)</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category (Required)</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {category &&
        attributes.map((attr, index) => (
          <div key={index}>
            <div className="form-group">
              <label>Sub Level 1</label>
              <select
                name="sub"
                className="form-control"
                onChange={(e) => handleSubChange(index, e)}
                value={attr.subs}
              >
                <option>Please select</option>
                {subOptions.length > 0 &&
                  subOptions.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.name}
                    </option>
                  ))}
              </select>
            </div>

            {attr.subs && (
              <div className="form-group">
                <label>Sub Level 2</label>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  value={attr.subs2}
                  onChange={(value) => handleSub2Change(index, value)}
                >
                  {sub2Options.length > 0 &&
                    sub2Options.map((s2) => (
                      <Option key={s2._id} value={s2._id}>
                        {s2.name}
                      </Option>
                    ))}
                </Select>
              </div>
            )}
          </div>
        ))}

      {category && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={addAttribute}
        >
          Add Attribute
        </button>
      )}

      <div className="form-group">
        <label>On Sale ? (if onsale then Required)</label>
        <select name="onSale" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {values.onSale === "Yes" && (
        <div className="form-group">
          <label>Sale Time & Date</label>
          <input
            type="text"
            name="saleTime"
            className="form-control"
            value={saleTime}
            onChange={handleChange}
          />
        </div>
      )}

      <br />
      <button
        disabled={(values.onSale === "Yes" && !saleTime) || !images.length}
        className="btn btn-outline-info"
      >
        Save
      </button>
    </form>
  );
};

export default ProductCreateForm;
