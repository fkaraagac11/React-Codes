export const updateDesigners = designers => {
	return {
		type: "UPDATE_DESIGNERS",
		payload: designers
	};
};

export const updateNations = nations => {
	return {
		type: "UPDATE_NATIONS",
		payload: nations
	};
};
export const updateSalesData = salesData => {
	return {
		type: "UPDATE_SALES_DATA",
		payload: salesData
	};
};
export const updateCurrentSelected = currentSelected => {
	return {
		type: "UPDATE_CURRENT_SELECTED",
		payload: currentSelected
	};
};
export const updateLoading = loading => {
	return {
		type: "UPDATE_LOADING",
		payload: loading
	};
};
export const updateLoggedIn = loggedIn => {
	return {
		type: "UPDATE_LOGGEDIN",
		payload: loggedIn
	};
};
export const updateLoginFail = loginFail => {
	return {
		type: "UPDATE_LOGIN_FAIL",
		payload: loginFail
	};
};

export const updateSpecificMonth = specificMonth => {
	return {
		type: "UPDATE_SPECIFIC_MONTH",
		payload: specificMonth
	};
};

export const updateShowSpecificMonth = showSpecificMonth => {
	return {
		type: "UPDATE_SHOW_SPECIFIC_MONTH",
		payload: showSpecificMonth
	};
};

export const updateThisMonthProductAndCustomerSource = thisMonthProductAndCustomerSource => {
	return {
		type: "UPDATE_THIS_MONTH_PRODUCT_AND_CUSTOMER_SOURCE",
		payload: thisMonthProductAndCustomerSource
	};
};

export const updateLastMonthProductAndCustomerSource = lastMonthProductAndCustomerSource => {
	return {
		type: "UPDATE_LAST_MONTH_PRODUCT_AND_CUSTOMER_SOURCE",
		payload: lastMonthProductAndCustomerSource
	};
};
