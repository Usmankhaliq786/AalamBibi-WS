export const requestBecomeAVolunteer = async (payload) => {
  let result = null;
  let error = null;
  try {
    const response = await fetch("/api/becomeAVolunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    result = await response.json();
  } catch (error) {
    error = error;
  } finally {
    return {
      error,
      result,
    };
  }
};
