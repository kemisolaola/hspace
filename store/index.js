export const state = () => ({
  tokenData: '',
  hospitalInitData: {
    _id: '',
    address: {
      state: '',
      city: '',
      street: ''
    },
    services: [''],
    bedSpaces: '',
    website: '',
    category: [],
    galleryImages: [''],
    parentHospital: [],
    openingHours: '',
    phone: []
  }
})
export const mutations = {
  saveHospitalData: (state, payload) => {
    state.hospitalInitData = payload
  },
  saveToken: (state, payload) => {
    state.tokenData = payload
  }
}
