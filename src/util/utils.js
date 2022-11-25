// import store from "../store/index";
import httpResource from "../http/httpResource";

export function parseApierror(error) {
  console.log("parseapierror", error);
  try {
    if (
      error &&
      error.hasOwnProperty("response") &&
      error.response.hasOwnProperty("data")
    ) {
      const apierror = error.response.data;
      return {
        status: apierror.status,
        statusCode: error.status,
        timestamp: apierror.timestamp,
        message: apierror.message,
      };
    }
  } catch (parseError) {
    return {
      status: "INTERNAL_SERVER_ERROR",
      statusCode: 500,
      timestamp: new Date(),
      message: "Server is not responding..",
    };
  }
}

export function performLogout(authStore) {
  const intervalName = store.getters.getIntervalName;
  if (intervalName) clearInterval(intervalName);
  authStore.setIsAuthenticated(false);
  authStore.clearCurrentUser();
}

// export async function refreshTokenInternal() {
//   try {
//     const response = await httpResource.post("/auth/refresh");
//     if (response.status !== 200) performLogout();
//   } catch (error) {
//     performLogout();
//   }
// }

// export async function refreshToken() {
//   const response = await httpResource.post("/auth/refresh");
//   return response.status;
// }

export async function getAuthenticatedUser(authStore) {
  try {
    const {
      data: { data },
      status,
    } = await httpResource.get("/api/auth/checkLogin");
    if (status === 200) {
      authStore.setCurrentUser(data);
      authStore.setIsAuthenticated(true);
    } else {
      performLogout(authStore);
    }
    return status;
  } catch (error) {
    return status;
    performLogout();
  }
}
