import React, { useState } from "react";
import "./modal.css";
import { Modal } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { useForm } from "react-hook-form";
import Input from "../input";
import WithTableData from "../../hooks/data/withTableData";
import { useContext, useEffect } from "react";
import success from "../../Assets/png/success.gif";
import { CiCircleRemove } from "react-icons/ci";
import { DatePicker } from "rsuite";

const ModalPage = ({
  isModal,
  handleClose,
  setTableData,
  tableData,
  setIsmodal,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [isCreate, setIsCreate] = useState(false);

  const handleChange = (value, event) => {
    if (value) {
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
      const day = String(value.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      setValue("deadline", formattedDate);
    } else {
      setValue("deadline", "");
    }
  };

  const onSubmit = (data) => {
    console.log("data is ", data);
    const newData = {
      id: Math.floor(Math.random() * 10000) + Date.now(),
      taskName: data?.taskName,
      description: data?.description,
      deadline: data?.deadline,
      status: data?.taskStatus,
    };

    setTableData([...tableData, newData]);

    if (data) {
      setIsmodal(false);
      setIsCreate(true);
    }
    reset();
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsCreate(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isCreate]);

  return (
    <>
      {isCreate && (
        <div className="success-popup">
          <CiCircleRemove
            onClick={() => setIsCreate(false)}
            className="remove-success"
          />
          <img className="success-img" src={success} />
          <h5 className="success-text">Task Created Successfully...!</h5>
        </div>
      )}
      <Modal keyboard={false} open={isModal} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <Input
              label="Task Name"
              name="taskName"
              register={register}
              required={{ value: true, message: "required field" }}
              errors={errors}
              type="text"
            />
            {errors?.taskName && (
              <p className="error">{errors?.taskName?.message}</p>
            )}
          </div>

          <div className="form-group">
            <Input
              label="Description"
              name="description"
              type="textarea"
              register={register}
              required={{
                value: true,
                message: "required field",
              }}
              errors={errors}
            />
            {errors?.description && (
              <p className="error">{errors?.description?.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Deadline : </label>
            {/* <Input
              label="Deadline"
              name="deadline"
              type="date"
              register={register}
              required={{ value: true, message: "required field" }}
              errors={errors}
            />

            {errors?.deadline && (
              <p className="error">{errors?.deadline?.message}</p>
            )} */}
            <DatePicker onChange={handleChange} block />
          </div>

          <div className="form-group">
            <Input
              label="Task Status"
              name="taskStatus"
              type="select"
              register={register}
              required={{ value: true, message: "required field" }}
              errors={errors}
              options={[
                { value: "Pending", label: "Pending" },
                { value: "In Progress", label: "In Progress" },
                { value: "Completed", label: "Completed" },
              ]}
            />
            {errors?.taskName && (
              <p className="error">{errors?.taskName?.message}</p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default WithTableData(ModalPage);
