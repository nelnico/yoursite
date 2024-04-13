export type DatabaseConstantInfo = {
  name: string;
  priority: number;
  description: string;
};

export function getIdByValue<T>(
  obj: Record<number, DatabaseConstantInfo>,
  value: string | null | undefined
): number | null {
  if (value === null || value === undefined) {
    return null;
  }
  const lowerValue = value.toLowerCase();
  const entry = Object.entries(obj).find(
    ([_, info]) => info.name.toLowerCase() === lowerValue
  );
  return entry ? Number(entry[0]) : null;
}

export function getValueById(
  obj: Record<number, DatabaseConstantInfo>,
  id: number | null | undefined
): DatabaseConstantInfo | null {
  if (id === null || id === undefined) {
    return null;
  }
  return obj[id] || null;
}

export const getYearsOfBirthForSelectList = () => {
  const currentYear = new Date().getFullYear();

  // Initialize an empty array to store the years
  const yearsArray: number[] = [];

  // Calculate the starting and ending years
  const startYear = currentYear - 80;
  const endYear = currentYear - 21;

  // Loop through the years in descending order and add them to the array
  for (let year = endYear; year >= startYear; year--) {
    yearsArray.push(year);
  }
  return yearsArray;
};

// IMPORTANT.  NEVER EVER EVER CHANGE ID'S!
//      THESE ARE THE ACTUAL IDS STORED IN THE DATABASE
//      WE AN CHANGE PRIORITY AND NAME
//      PRIORITY DICTATE THE ORDER THINGS ARE DISPLAYED IN DROPDOWNS FOR INSTANCE
//      NAME IS WHAT THE USER SEE
//      DESCRITION UNUSED ... FOR NOW

export const getDbItemsForSelectList = <T extends DatabaseConstantInfo>(
  dbItems: Record<number, T>
): { value: number; label: string; description: string }[] => {
  const itemsList: { value: number; label: string; description: string }[] = [];
  for (const key in dbItems) {
    if (Object.prototype.hasOwnProperty.call(dbItems, key)) {
      itemsList.push({
        value: parseInt(key),
        label: dbItems[key].name,
        description: dbItems[key].description,
      });
    }
  }
  // Sort items by priority
  itemsList.sort((a, b) => {
    const priorityA = dbItems[a.value].priority;
    const priorityB = dbItems[b.value].priority;
    return priorityA - priorityB;
  });
  return itemsList;
};

export const dbProvinces: Record<number, DatabaseConstantInfo> = {
  1: { name: "Gauteng", priority: 1, description: "" },
  2: { name: "KwaZulu-Natal", priority: 2, description: "" },
  3: { name: "Western Cape", priority: 3, description: "" },
  4: { name: "Eastern Cape", priority: 4, description: "" },
  5: { name: "Mpumalanga", priority: 5, description: "" },
  6: { name: "Limpopo", priority: 6, description: "" },
  7: { name: "North West", priority: 7, description: "" },
  8: { name: "Free State", priority: 8, description: "" },
  9: { name: "Northern Cape", priority: 9, description: "" },
};

// export const dbXXXX: Record<number, DatabaseConstantInfo> = {
//     1: { name: "xxx", priority: 1, description: "" },
//     2: { name: "xxx", priority: 2, description: "" },
//     3: { name: "xxx", priority: 3, description: "" },
//
