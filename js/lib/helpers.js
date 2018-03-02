// Helper to format format individual Firebase records
export const formatDataObject = data => {
  const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
  return dataObject[0];
};

// Helper to format Firebase data into section list data
export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.start_time);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.start_time, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

function filterFaves(faves, data) {
  return data.filter(event => faves.includes(event.session_id));
}

// Helper to filter and format Faves
export const formatAndFilterFaves = (faves, data) => {
  const arrayOfFaves = Object.values(faves);
  const filteredFaves = formatSessionData(filterFaves(arrayOfFaves, data));
  console.log(filteredFaves);
  return filteredFaves;
};
