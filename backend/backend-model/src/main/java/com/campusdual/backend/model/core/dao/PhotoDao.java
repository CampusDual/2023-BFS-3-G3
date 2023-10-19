package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "PhotoDao")
@ConfigurationFile(
        configurationFile = "dao/PhotoDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class PhotoDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "photoid";
    public static final String PHOTO = "photo";
    public static final String GYM_ID = "gymid";
}
