const permissions = JSON.parse('[{"id":85,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_files","action":"create","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":86,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_files","action":"read","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":87,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_files","action":"update","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":88,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_files","action":"delete","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":89,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_dashboards","action":"create","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":90,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_dashboards","action":"read","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":91,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_dashboards","action":"update","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":92,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_dashboards","action":"delete","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":93,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_panels","action":"create","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":94,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_panels","action":"read","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":95,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_panels","action":"update","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":96,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_panels","action":"delete","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":97,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_folders","action":"create","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":98,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_folders","action":"read","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":99,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_folders","action":"update","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":100,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_folders","action":"delete","permissions":{},"validation":null,"presets":null,"fields":null},{"id":101,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_users","action":"read","permissions":{"_and":[{"role":{"_neq":"6b3f0b15-7e4f-4777-a9f8-cb5fff150de0"}}]},"validation":null,"presets":null,"fields":"*"},{"id":102,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_users","action":"update","permissions":{"_and":[{"role":{"_neq":"6b3f0b15-7e4f-4777-a9f8-cb5fff150de0"}}]},"validation":null,"presets":null,"fields":"first_name,last_name,email,password,location,title,description,avatar,language,theme,tfa_secret"},{"id":103,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_roles","action":"read","permissions":{"_and":[{"id":{"_neq":"6b3f0b15-7e4f-4777-a9f8-cb5fff150de0"}}]},"validation":{},"presets":null,"fields":"*"},{"id":104,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_shares","action":"read","permissions":{"_or":[{"role":{"_eq":"$CURRENT_ROLE"}},{"role":{"_null":true}}]},"validation":null,"presets":null,"fields":"*"},{"id":105,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_shares","action":"create","permissions":{},"validation":null,"presets":null,"fields":"*"},{"id":106,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_shares","action":"update","permissions":{"user_created":{"_eq":"$CURRENT_USER"}},"validation":null,"presets":null,"fields":"*"},{"id":107,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_shares","action":"delete","permissions":{"user_created":{"_eq":"$CURRENT_USER"}},"validation":null,"presets":null,"fields":"*"},{"id":108,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_flows","action":"read","permissions":{"trigger":{"_eq":"manual"}},"validation":null,"presets":null,"fields":"id,name,icon,color,options,trigger"},{"id":109,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"aste","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":110,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"aste","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":111,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"aste","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":112,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"aste","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":113,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"aste","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":114,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"blog","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":115,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"blog","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":116,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"blog","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":117,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"blog","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":118,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"blog","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":119,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"boutique","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":120,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"boutique","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":121,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"boutique","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":122,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"boutique","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":123,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"boutique","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":124,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"team","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":125,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"team","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":126,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"team","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":127,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"team","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":128,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"team","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":129,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"news","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":130,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"news","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":131,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"news","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":132,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"news","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":133,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"news","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":134,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"landing_page","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":135,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"landing_page","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":136,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"landing_page","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":137,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"landing_page","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":138,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"landing_page","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":139,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"contatti","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":140,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"contatti","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":141,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"contatti","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":142,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"contatti","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":143,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"contatti","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":144,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"brand","action":"share","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":145,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"brand","action":"delete","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":146,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"brand","action":"update","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":147,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"brand","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":148,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"brand","action":"create","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":151,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_users","action":"create","permissions":null,"validation":{"_and":[{"role":{"_neq":"6b3f0b15-7e4f-4777-a9f8-cb5fff150de0"}}]},"presets":null,"fields":"first_name,last_name,email,password,avatar,location,title,description,vat,telephone,postalcode,outbidEmailsOk,fiscalCode,externalRef,cuu,county,country,companyName,companyCountry,companyAddress,city,address2,address1,username,auth_data,external_identifier,provider,role"},{"id":152,"role":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","collection":"directus_users","action":"delete","permissions":{"_and":[{"role":{"_neq":"6b3f0b15-7e4f-4777-a9f8-cb5fff150de0"}}]},"validation":null,"presets":null,"fields":null}]')
permissions.forEach((p) => {
  p.permissions = JSON.stringify(p.permissions)
  p.validation = JSON.stringify(p.validation)
  p.presets = JSON.stringify(p.presets)
  delete p.id
})

module.exports = {
  async up(knex) {
    await knex('directus_permissions').delete().where('role', 'dc7be20f-7b81-431e-8db2-3ffbbf4f9174')
    return permissions.length ? knex('directus_permissions').insert(permissions) : true
  },

  async down(knex) {
    return true
  },
}
