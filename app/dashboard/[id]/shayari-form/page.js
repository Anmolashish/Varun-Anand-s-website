"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ShayariForm() {
  const [submittedData, setSubmittedData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  // Predefined keyword options
  const keywordOptions = [
    "signature",
    "sad",
    "romantic",
    "breakup",
    "motivational",
    "social",
    "politic",
  ];

  // On form submission
  const onSubmit = (data) => {
    // Ensure "Latest" is included in the keywords
    const keywordsWithLatest = Array.from(
      new Set([...data.keywords, "latest"])
    );

    // Add the data to the submittedData array
    const formattedData = {
      shayariname: data.heading,
      keywords: keywordsWithLatest,
      shayari: data.hindiShayari,
      urdushayari: data.urduShayari,
    };
    setSubmittedData((prev) => [...prev, formattedData]);

    //resets
    reset();
  };

  return (
    <div className="form-background">
      <div className="form-container-heading">Shayari Form</div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Heading"
          {...register("heading", { required: "Heading is required" })}
        />
        {errors.heading && (
          <span className="error">{errors.heading.message}</span>
        )}

        <div className="keywords-checkbox">
          <label className="keywords-label">Keywords:</label>
          <div className="checkbox-group">
            {keywordOptions.map((keyword) => (
              <label key={keyword} className="checkbox-item">
                <input
                  type="checkbox"
                  value={keyword}
                  {...register("keywords", {
                    validate: (value) =>
                      value?.length > 0 || "At least one keyword is required",
                  })}
                  className="checkbox-input"
                />
                <span className="checkbox-custom"></span>
                {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
              </label>
            ))}
          </div>
          {errors.keywords && (
            <span className="error">{errors.keywords.message}</span>
          )}
        </div>

        <textarea
          placeholder="Hindi Shayari"
          {...register("hindiShayari", {
            required: "Hindi Shayari is required",
          })}
        />
        {errors.hindiShayari && (
          <span className="error">{errors.hindiShayari.message}</span>
        )}

        <textarea
          placeholder="Urdu Shayari"
          {...register("urduShayari", {
            required: "Urdu Shayari is required",
          })}
        />
        {errors.urduShayari && (
          <span className="error">{errors.urduShayari.message}</span>
        )}

        <button type="submit" className="form-button shayari-form">
          Confirm
        </button>
      </form>
    </div>
  );
}
