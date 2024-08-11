export function ClearTalent(setPtalent, index) {
  return setPtalent((prevPtalent) => {
    const updatedPtalent = [...prevPtalent];

    if (!updatedPtalent[index]) {
      updatedPtalent[index] = {
        contractduration: "",
        billrate: "",
        stdtimebr: "",
        overtimebr: "",
        checked: false,
      };
    } else {
      updatedPtalent[index] = {
        ...updatedPtalent[index],
        contractduration: "",
        billrate: "",
        stdtimebr: "",
        overtimebr: "",
        checked: false,
      };
    }

    return updatedPtalent;
  });
}
