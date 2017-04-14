const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const pagesData = require('./pages.json')

const cfg = require('../config')

const dataPath = path.resolve(cfg.paths.data)
const pagesDataFile = path.join(dataPath, 'pages.json')

const saveDataToFile = function (data, file) {
  fs.exists(file, function(exists) {
    fs.writeFile(file, data, 'utf8', function(err) {
      if(err) throw err;
    })
  })
}

const pages = {
  all: pagesData,
  getBySlug: function(slug) {
    const res = this.all[slug]
    return res ? Object.assign({}, res) : null
  },
  getById: function(id) {
    return Object.assign(_.flatMap(this.all, function (p) {
      return p.id === id
    })[0])
  },
  getBy(field, value) {
    return Object.assign({}, _.flatMap(this.all, function (p) {
      return p[field] === value
    })[0])
  },
  contains(slug) {
    return !!this.all[slug]
  },
  save(page) {
    if(!this.contains(page.slug)) {
      // insert
      // next id
      const nextId = _.max(_.flatMap(this.all, function (p) {
        return p.id
      })) + 1
      page.id = nextId
    }
    const allPages = Object.assign({}, this.all)
    allPages[page.slug] = Object.assign({}, page)
    const jsonToSave = JSON.stringify(allPages)

    saveDataToFile(jsonToSave, pagesDataFile)
    
    this.all = allPages
    return allPages
  }
}
module.exports = pages