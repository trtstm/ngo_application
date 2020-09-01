import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Organization from '../models/Organization'
import Course from '../models/Course'
import flows from './flows'
import glossary from './glossary'
import language from './language'
import settings from './settings'
import comments from './comments'
// import example from './module-example'
//import chatbot from './chatbot'
import documents from './documents'
import information from './information'
import information_category from './information_category'
import information_tags from './information_tags'
import user from './user'
import interventions from './interventions'

VuexORM.use(VuexORMAxios, { axios })

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Organization)
database.register(Course)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
    modules: {
      // example
      //    chatbot,
      documents,
      information,
      user,
      flows,
      glossary,
      interventions,
      language,
      settings,
      comments,
      information_category,
      information_tags
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
