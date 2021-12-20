export const state = () => ({
  updatedHospital: false,
  addedHospital: false,
  addedLab: false,
  addedPharm: false,
  tokenData: '',
  AdmintokenData: '',
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
    phone: [],
    facility: ''
  }
})
export const mutations = {
  update: (state, payload) => {
    state.updatedHospital = payload
  },
  addHospital: (state, payload) => {
    state.addedHospital = payload
  },
  addPharm: (state, payload) => {
    state.addedPharm = payload
  },
  addLab: (state, payload) => {
    state.addedLab = payload
  },
  saveHospitalData: (state, payload) => {
    state.hospitalInitData = payload
  },
  saveToken: (state, payload) => {
    state.tokenData = payload
  },
  saveSAToken: (state, payload) => {
    state.AdmintokenData = payload
  }
}
export const actions = {
  showUpdate: ({ commit }, payload) => {
    commit('update', payload)
  },
  showAdd: ({ commit }, payload) => {
    commit('addHospital', payload)
  },
  showAddLab: ({ commit }, payload) => {
    commit('addLab', payload)
  },
  showAddPharm: ({ commit }, payload) => {
    commit('addPharm', payload)
  }
}
