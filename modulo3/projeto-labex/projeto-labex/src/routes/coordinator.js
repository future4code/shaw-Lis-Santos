export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToTripDetailPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToListTripsPage = (navigate) => {
    navigate("/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/application")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}