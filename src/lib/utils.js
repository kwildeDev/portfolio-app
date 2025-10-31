export function serializeForClient(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (key === '_id' && value?.toString) {
        return value.toString();
      }
      return value;
    })
  );
}
